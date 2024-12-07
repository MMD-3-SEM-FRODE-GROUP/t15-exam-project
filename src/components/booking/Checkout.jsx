"use client";
import { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Alert, AlertDescription } from "../ui/alert";
import { CreditCard } from "lucide-react";
import { api } from "@/lib/api";

export default function Checkout({ bookingData, setReservationId, onNext, onBack }) {
  const calculateTotal = () => {
    let total = bookingData.ticketCount * (bookingData.ticketType === "vip" ? 1299 : 799);
    if (bookingData.greenCamping) total += 249;
    if (bookingData.tentSetup === "2person") total += 299 * Math.ceil(bookingData.ticketCount / 2);
    if (bookingData.tentSetup === "3person") total += 399 * Math.ceil(bookingData.ticketCount / 3);
    return total;
  };

  const handleSubmit = async () => {
    try {
      const reservation = await api.reserveSpot(bookingData.campingArea, bookingData.ticketCount);
      setReservationId(reservation.id);
      await api.fulfillReservation(reservation.id);
      onNext();
    } catch (error) {
      console.error("Checkout failed:", error);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="h-6 w-6" />
          Checkout
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="border-b pb-4">
            <h3 className="font-semibold">Order Summary</h3>
            <p>
              {bookingData.ticketCount}x {bookingData.ticketType} Tickets
            </p>
            {bookingData.greenCamping && <p>Green Camping Option</p>}
            {bookingData.tentSetup && <p>Tent Setup: {bookingData.tentSetup}</p>}
            <p className="text-xl font-bold mt-2">Total: {calculateTotal()},-</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cardNumber">Card Number</Label>
            <Input id="cardNumber" type="text" placeholder="**** **** **** ****" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="expiry">Expiry Date</Label>
              <Input id="expiry" type="text" placeholder="MM/YY" />
            </div>
            <div>
              <Label htmlFor="cvv">CVV</Label>
              <Input id="cvv" type="text" placeholder="***" />
            </div>
          </div>

          <Alert>
            <AlertDescription>This is a demo checkout. No actual payment will be processed.</AlertDescription>
          </Alert>

          <div className="flex justify-between mt-4">
            <Button variant="outline" onClick={onBack}>
              Back
            </Button>
            <Button onClick={handleSubmit}>Complete Purchase</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
