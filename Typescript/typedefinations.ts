import axios from 'axios';
import type { AxiosResponse } from 'axios';

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface UserResponse {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

const fetchData = async () => {
  try {
    const response: AxiosResponse<UserResponse[]> =
      await axios.get("https://jsonplaceholder.typicode.com/users");

    console.log("Users:", response.data);
  } catch (error) {
    console.error("Error fetching users", error);
  }
};

fetchData();
