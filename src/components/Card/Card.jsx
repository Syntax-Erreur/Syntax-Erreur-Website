import React from 'react';
import aboutprofile from "../../assets/images/aboutprofile.png";
import aboutprofile2 from "../../assets/images/aboutprofile2.png";
import aboutprofile3 from "../../assets/images/aboutprofile3.png";
import downArrow from "../../assets/images/downArrow.svg";
import noOne from '../../assets/images/noOne.png'
import monisha from '../../assets/images/monisha.jpeg'
import Aryanser from '../../assets/images/Aryanser.png'
import vedant from '../../assets/images/Vedant.png'
import rohit from '../../assets/images/rohit.png'
// import arya from '../../assets/images/arya.png'
import bedant from '../../assets/images/bedant.png'
import vasudha from '../../assets/images/vasudha.png'
import manas from '../../assets/images/NewNoOne.png'      // change the src once we have pic of manas
import kaushik from '../../assets/images/kaushik.png'
import jacobs from '../../assets/images/jacobs.png'


const Card = () => {
  const array = [
    {
      image: aboutprofile2,
      title: {
        head: 'Aryan Singh',
        designation: 'Founder & CEO',

        img: Aryanser,

        name: 'Twitter',
        link: "https://linktr.ee/_aryansingh"
      },
      description: 'The visionary founder of Syntax Erreur, leading the way in App and web development as a versatile full-stack developer'
    },
    {
      image: aboutprofile,
      title: {
        head: 'Chamuditha Jayood',
        designation: 'Founder',
        img: vedant,
        name: 'Twitter',
        link: "https://www.linkedin.com/in/chamuditha-jayood-a22031217/"
      },
      description: 'Founder of Syntax Erreur, mastering mobile and web development as a full-stack developer, with a passion for creating beautiful and functional user interfaces.'
    },
    {
      image: aboutprofile2,
      title: {
        head: 'Vedant Sawant',
        designation: 'Cofounder',
        img: bedant,

        name: 'Twitter',
        link: "https://linktr.ee/vedants73"

      },
      description: 'A talented co-founder and skilled developer at Syntax Erreur, specializing in Django and backend development, crafting robust and dynamic web applications.'
    },
    {
      image: aboutprofile,
      title: {
        head: 'Rohit Ghosh',
        designation: 'Cofounder',
        img: rohit,
        name: 'Instagram',
        link: "https://linktr.ee/RohitGhosh7703"
      },
      description: 'A dedicated co-founder at Syntax Erreur, contributing as a versatile full-stack developer, seamlessly bridging the gap between frontend and backend for exceptional results.      '
    },
    {
      image: aboutprofile,
      title: {
        head: 'Manas Mishra',
        designation: 'Cofounder',
        img: manas,
        name: 'Instagram',
        link: "https://instagram.com/manas_129?igshid=MzRlODBiNWFlZA=="
      },
      description: 'The creative co-founder of Syntax Erreur, bringing websites to life with his expertise in web development and a passion for innovative solutions. '
    },
    {
      image: aboutprofile2,
      title: {
        head: 'Vasudha Singh',
        designation: 'Operations Head',
        img: vasudha,

        name: 'Twitter',
        link: "https://www.linkedin.com/in/vasudha-singh-b61299246/"
      },
      description: ' A vital core member at Syntax Erreur, diligently overseeing operations with exceptional managerial skills, ensuring smooth functioning and efficient execution'
    }, {
      image: aboutprofile3,
      title: {
        head: 'Monisha Keshwani',
        designation: 'UI / UX Designer',
        img: monisha,
        name: 'Twitter',
        link: "https://instagram.com/basicbehen?igshid=MzRlODBiNWFlZA=="
      },
      description: 'A valued core member at Syntax Erreur, channeling her passion for design into crafting captivating user friendly experiences as a UX/UI designer.'
    },

    {
      image: aboutprofile3,
      title: {
        head: 'Jacobs Tunmise',
        designation: 'UI / UX Designer',
        img: jacobs,
        name: 'Twitter',
        link: "https://www.linkedin.com/in/tunmise-jacobs?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
      },
      description: "An indispensable team member at Syntax Erreur, passionately shaping user-friendly experiences as a UX/UI designer."
    },
 

    {
      image: aboutprofile3,
      title: {
        head: 'Kaushik  Patil',
        designation: 'Social Media Manager',
        img: kaushik,
        name: 'Twitter',
        link: "https://instagram.com/kaushikk_who?igshid=MzRlODBiNWFlZA=="
      },
      description: "The creative social media addict behind Syntax Erreur's instagram presence using marketing strategies to build a strong online presence and engage with our audience effectively.        "
    },





  ];

  return (
    <div className="flex overflow-x-auto">
      {array.map((item, index) => (
        <div
          key={index}
          className='flex justify-center sm:justify-between items-start sm:items-center bg-white w-[290px]  h-[380px]  sm:w-[350px] sm:h-[400px] text-black mx-auto rounded-2xl p-5 shadow-lg mr-6'
        >
          <div className='flex flex-col items-center justify-around h-full sm:items-start'>
            <div className='flex flex-col items-center justify-center gap-5 sm:flex-row'>
              <img src={item.title.img} alt='' className='w-20 h-20 rounded-full sm:h-28 sm:w-28 ' />
              <div className='flex flex-col items-center justify-center sm:items-start sm:justify-start'>
                <p className='font-semibold uppercase ' >{item.title.head}</p>
                <p className='text-center'>{item.title.designation}</p>
                {/* <p>Age: {item.title.age}</p> */}
              </div>
            </div>

            <div className='mt-5'>{item.description}</div>
            <div className='flex justify-center w-full mt-3'>
              <a className='flex items-center justify-between gap-2 px-5 py-2 text-white transition-all duration-1000 bg-black border border-black rounded-lg connect group hover:text-black hover:bg-white' href={item.title.link} target='_blank'>
                Connect
                <img className='block transition-all duration-1000 fill-black group-hover:hidden' xmlns="http://www.w3.org/2000/svg"
                  width="20" height="20" src="sort-down.png" alt="sort-down" />
                <img className='hidden transition-all duration-1000 fill-black group-hover:block' xmlns="http://www.w3.org/2000/svg"
                  width="20" height="20" src="sort-downb.png" alt="sort-down" />
              </a>
              <br />
            </div>
            {/* <div className='flex justify-center pt-2'>
                <div className='bg-white border-2 border-black rounded-xl'>
<p className='flex items-center justify-center w-32 px-4 '><img src={item.title.img} width="50px"/> {item.title.name}</p>
                </div>
              </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
