import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function Footer() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <footer className='bg-slate-900 text-white text-center'>
      <div className='flex flex-col  items-center py-4 p-3 gap-5'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
          <span className='text-blue-300'>Valley</span>
          <span className='text-green-400'>View</span>
          <span className='text-violet-500'>Zones</span>
          </h1>
        </Link>
        <ul className='flex gap-10'>
          <Link to='/'>
            <li className='text-sm sm:text-lg inline hover:underline'>
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className='text-sm sm:text-lg inline hover:underline'>
              About
            </li>
          </Link>
          <Link to='/privacy-policy'>
            <li className='text-sm sm:text-lg inline hover:underline'>
              Privacy Policy
            </li>
          </Link>
          <Link to='mailto:varsha280902@gmail.com'>
            <li className='text-sm sm:text-lg inline hover:underline'>
            Contact Us
            </li>
          </Link>
        </ul>
        <p className='text-sm sm:text-lg m-auto'>
          &copy; {new Date().getFullYear()} ValleyViewZones<br></br>
          Since 2024<br></br>
          All rights reserved
        </p>
      </div>
    </footer>
  );
}


