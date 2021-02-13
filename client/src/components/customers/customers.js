import "./customers.css";
import React, { useState, useEffect } from "react";

function Customers() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); 
    fetch("/api/customers")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCustomers(data);
        setLoading(false); 
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>Customers</h2>
      <ul>
        {customers.map((customer) => {
          return (
            <li key={customer.id}>
              {customer.firstName} {customer.lastName}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Customers;
