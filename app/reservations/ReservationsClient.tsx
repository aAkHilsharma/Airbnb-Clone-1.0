'use client';

import { toast } from "react-hot-toast";
import axios from "axios";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

import { SafeReservation, SafeUser } from "../types";

import Heading from "../components/Heading";
import Container from "../components/Container";
import ListingCard from "../components/listings/ListingCard";

interface ReservationClientProps {
    reservations: SafeReservation[];
    currentUser: SafeUser | null;
}

const ReservationsClient:React.FC<ReservationClientProps> = ({
    reservations,
    currentUser
}) => {
    const router = useRouter();
    const [deletingId, setDeletingId] = useState('');

    const onCancel = useCallback((id: string) => {
        setDeletingId(id);

        axios.delete(`/api/reservations/${id}`)
            .then(() => {
                toast.success('Reservation cancelled');
                router.refresh();
            })
            .catch(() => {
                toast.error('Something went wrong.');
            })
            .finally(() => {
                setDeletingId('');
            })
    }, [router]);

  return (
    <Container>
        <Heading 
            title="Reservations"
            subtitle="Booking on your properties"
        />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-8">
            { reservations.map((res) => (
                <ListingCard 
                    key={res.id}
                    data={res.listing}
                    reservation={res}
                    actionId={res.id}
                    onAction={onCancel}
                    disabled={deletingId === res.id}
                    actionLabel="Cancel guest reservation"
                    currentUser={currentUser}
                />
            )) }
        </div>
    </Container>
  )
}

export default ReservationsClient