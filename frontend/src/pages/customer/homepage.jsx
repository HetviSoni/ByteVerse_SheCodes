import BusinessCard from "../../components/business-card/BusinessCard";
import CustomerNavbar from "../../components/customer-navbar/CustomerNavbar";
import { useState, useEffect } from "react";
import './homepage.css';
const CustomerHomePage = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Filter data based on query and update data state
    const filteredData = data.filter(item => item.skill.includes(query));
    setData(filteredData);
  };

  useEffect(() => {
    const token = localStorage.getItem('accessToken');

    const fetchData = async () => {
      const result = await fetch(
        'https://udaan.pythonanywhere.com/api/business/profile/all/',
        {

          method: "GET",

          headers: {
            "Content-Type": "application/json",

            "Authorization": `Bearer ${token}`
            , "Access-Control-Allow-Origin": "*"
          }
        }
      ).then((response) => response.json()
      );
      setData(result.data);
    };

    fetchData();
  }, []);

 
  return (
    <>
      <CustomerNavbar goto="dashboard"/>
      <div className="customer-home">
        {/* <SearchBar  onSearch={handleSearch} />  */}
        <form className="searchbar" onSubmit={handleSubmit}>
          <input className="input" type="text" value={query} onChange={handleChange} placeholder="Search for skills" />
          <button className="search"><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
        {data.map(item => (
          <BusinessCard
            key={item.id}
            name={item.first_name}
            rating={item.rating}
            jobs_completed={item.jobs_completed}
            skills={item.skill}
          />
        ))}
        {/* {data.map(item => (
          <BusinessCard
            key={item.id}
            name={item.first_name}
            rating={item.rating}
            jobs_completed={item.jobs_completed}
            skills={item.skill}
          />
        ))} */}
      </div>
    </>

  )
}
export default CustomerHomePage;