import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Pricing</h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaFire />
                </div>
                <h3>Basic</h3>
                <h4>@1500</h4>
                {/* <p>per month</p> */}
                <p>{" "}</p>
                <ul className='pricing__container-features'>
                  <li>Balloon</li>
                  {/* <li>2% Cash Back</li> */}
                  {/* <li>$10,000 Limit</li> */}
                  &nbsp;
                  <li>{" "}</li>
                  &nbsp;
                  <li>{" "}</li>
                  &nbsp;
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose Plan
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />
                </div>
                <h3>Gold</h3>
                <h4>@2500</h4>
                {/* <p>per month</p> */}
                <p>{" "}</p>
                <ul className='pricing__container-features'>
                  <li>Balloon </li>
                  <li>Ring Pattern</li>
                  <li>Lighting</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  Choose Plan
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiCrystalize />
                </div>
                <h3>Diamond</h3>
                <h4>@3500</h4>
                {/* <p>per month</p> */}
                <p>{" "}</p>
                <ul className='pricing__container-features'>
                  <li>Balloon</li>
                  <li>Pattern</li>
                  <li>Lighting</li>
                  <li>Flower</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose Plan
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
