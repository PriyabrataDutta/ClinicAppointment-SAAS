import { useState, useEffect } from 'react';
import { signInWithPhoneNumber, ConfirmationResult } from 'firebase/auth';
import { auth, setupRecaptcha } from '@/lib/firebase';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface OtpProps {
  phoneNumber: string;
  onVerified: () => void;
  onCancel: () => void;
}

export const OtpVerification = ({ phoneNumber, onVerified, onCancel }: OtpProps) => {
  const [otp, setOtp] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);

  useEffect(() => {
    const sendOtp = async () => {
      setIsSending(true);
      try {
        const verifier = setupRecaptcha('recaptcha-container');
        // Ensure format is +91XXXXXXXXXX
        const formattedPhone = phoneNumber.startsWith('+') ? phoneNumber : `+91${phoneNumber}`; 
        const confirmation = await signInWithPhoneNumber(auth, formattedPhone, verifier);
        setConfirmationResult(confirmation);
        toast.success('OTP sent successfully!');
      } catch (error) {
        console.error(error);
        toast.error('Failed to send OTP. Try again.');
        onCancel();
      } finally {
        setIsSending(false);
      }
    };
    sendOtp();
  }, [phoneNumber, onCancel]);

  const handleVerify = async () => {
    if (!otp || !confirmationResult) return;
    setIsVerifying(true);
    try {
      await confirmationResult.confirm(otp);
      toast.success('Phone verified successfully!');
      onVerified();
    } catch (error) {
      toast.error('Invalid OTP. Please try again.');
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl">
        <h3 className="text-xl font-bold mb-2">Verify Phone Number</h3>
        <p className="text-sm text-slate-500 mb-4">
          Enter the code sent to <b>{phoneNumber}</b>
        </p>
        
        {isSending ? (
           <div className="flex items-center justify-center py-8">
             <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
           </div>
        ) : (
           <div className="space-y-4">
              <Input 
                placeholder="Enter 6-digit OTP" 
                value={otp} 
                onChange={(e) => setOtp(e.target.value)} 
                maxLength={6}
                className="text-center text-lg tracking-widest"
              />
              <div id="recaptcha-container"></div>
              <div className="flex gap-3">
                 <Button variant="outline" className="flex-1" onClick={onCancel}>Cancel</Button>
                 <Button className="flex-1" onClick={handleVerify} isLoading={isVerifying}>Verify</Button>
              </div>
           </div>
        )}
      </div>
    </div>
  );
};