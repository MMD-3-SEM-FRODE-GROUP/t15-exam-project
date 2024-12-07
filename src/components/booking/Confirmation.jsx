import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { CheckCircle2 } from "lucide-react";

export default function Confirmation({ reservationId, onReset }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center text-green-600 flex items-center justify-center gap-2">
          <CheckCircle2 className="h-6 w-6" />
          Thank You For Your Purchase!
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center space-y-4">
          <p>Your order has been confirmed.</p>
          <p>Reservation ID: {reservationId}</p>
          <p>We've sent the confirmation details to your email.</p>
          <Button onClick={onReset}>Book More Tickets</Button>
        </div>
      </CardContent>
    </Card>
  );
}
