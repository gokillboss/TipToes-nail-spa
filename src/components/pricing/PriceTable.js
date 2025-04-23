import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/PriceTable.css';

const PriceTable = ({ prices }) => {
  return (
    <Table responsive className="price-table">
      <thead>
        <tr>
          <th>Service</th>
          <th>Description</th>
          <th>Price</th>
          <th>Book</th>
        </tr>
      </thead>
      <tbody>
        {prices.map(item => (
          <tr key={item.id}>
            <td data-label="Service">{item.service}</td>
            <td data-label="Description" className="price-desc">{item.description}</td>
            <td data-label="Price" className="price">{item.price}</td>
            <td data-label="Book">
              <Link to="/booking">
                <Button className="btn-book">Book Now</Button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};


export default PriceTable;