import { Suspense } from 'react';
import PaymentSuccess from '@/app/Component/paymentSuccess/paymentSuccess';

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentSuccess />
    </Suspense>
  );
}