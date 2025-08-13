
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "./ui/button";

const upcomingAppointments = [
    { id: 1, date: "Oct 25, 2024", time: "11:00 AM", service: "Bridal Makeup", stylist: "Riya" },
    { id: 2, date: "Nov 10, 2024", time: "02:30 PM", service: "Keratin Treatment", stylist: "Pooja" },
];

const pastBookings = [
    { id: 3, date: "Sep 12, 2024", service: "Signature Facial" },
    { id: 4, date: "Aug 05, 2024", service: "Haircut & Color" },
];

export default function AppointmentsCard() {
    return (
        <Card className="shadow-sm">
            <CardHeader>
                <CardTitle className="font-headline text-2xl">My Bookings</CardTitle>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="upcoming">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                        <TabsTrigger value="past">History</TabsTrigger>
                    </TabsList>
                    <TabsContent value="upcoming" className="mt-6 space-y-4">
                        {upcomingAppointments.map(booking => (
                            <div key={booking.id} className="p-4 border rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div>
                                    <p className="font-bold">{booking.service}</p>
                                    <p className="text-sm text-muted-foreground">
                                        {booking.date} at {booking.time} with {booking.stylist}
                                    </p>
                                </div>
                                <div className="flex gap-2 self-end sm:self-center">
                                    <Button variant="outline" size="sm">Reschedule</Button>
                                    <Button variant="destructive-outline" size="sm">Cancel</Button>
                                </div>
                            </div>
                        ))}
                         {upcomingAppointments.length === 0 && <p className="text-muted-foreground text-center py-8">No upcoming appointments.</p>}
                    </TabsContent>
                    <TabsContent value="past" className="mt-6 space-y-4">
                         {pastBookings.map(booking => (
                            <div key={booking.id} className="p-4 border rounded-lg flex justify-between items-center">
                                <div>
                                    <p className="font-bold">{booking.service}</p>
                                    <p className="text-sm text-muted-foreground">{booking.date}</p>
                                </div>
                                <Button variant="secondary" size="sm">Rebook</Button>
                            </div>
                        ))}
                        {pastBookings.length === 0 && <p className="text-muted-foreground text-center py-8">No past bookings.</p>}
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    );
}
