import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/Authproviders";
import BookingRow from "./BookingRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setbookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setbookings(data));
  }, [url]);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete this booking");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`,{
        method: "DELETE",
        
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if(data.deletedCount > 0){
            alert("Booking deleted successfully");
            const remaining = bookings.filter(booking => booking._id !== id);
            setbookings(remaining);
          }
        });
    }
  };


  const handleBookingConfirm = id => {
    fetch(`http://localhost:5000/bookings/${id}`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            status: "confirmed"
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
            const remaining = bookings.filter(booking => booking._id !== id);
            const  updated = bookings.find(booking => booking._id === id);
            updated.status = "confirmed";
            const newBookings=[updated, ...remaining];
            setbookings(newBookings);
        }
    });
  }

  return (
    <div>
      <h2 className="text-5xl">{bookings.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="font-bold  text-black">
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(booking => <BookingRow key={booking._id} booking={booking} handleDelete={handleDelete} handleBookingConfirm={handleBookingConfirm} ></BookingRow>)}
            
         
           
          </tbody>
          
        </table>
      </div>
    </div>
  );
};

export default Bookings;