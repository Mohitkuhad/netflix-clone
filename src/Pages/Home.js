import React, { useState, useRef } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import HomeCard from "../Components/HomeCard";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

function Home() {
  const [email, setEmail] = useState("");
  const inputRef = useRef(null);
  const handleClick = () => {
    if (email == "") {
      inputRef.current.focus();
    } else {
      window.location.href = `/signup/registration?user=${email}`;
    }
  };
  const faq = [
    {
      question: "What is Netflix?",
      ans: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more - on thousands of internet-connected devices.
       You can watch as much as you want, whenever you want, without a single ad - all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!`,
    },
    {
      question: "How much does Netflix cost?",
      ans: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.",
    },
    {
      question: "Where can I watch?",
      ans: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      question: "How do I cancel",
      ans: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees - start or stop your account anytime.",
    },
    {
      question: "What can I watch on Netflix?",
      ans: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      question: "Is Netflix good for kids?",
      ans: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see.",
    },
  ];

  return (
    <div className="bg-black">
      <div className="w-screen h-[80vh] bg-[url('https://res.cloudinary.com/dlqpxszzo/image/upload/v1679340120/NetflixClone/homeBg_xsesfd.jpg')]">
        <div className="w-full h-[80vh] absolute top-0 left-0 bg-gradient-to-r from-[rgba(11,20,59,0.8)] to-[rgba(0,0,0,0.4)]">
          <Header />
          <div className="w-2/4 ml-28 flex flex-col gap-10">
            <h1 className="text-white text-7xl font-bold">
              Unlimited movies, TV shows and more.
            </h1>
            <h2 className="text-white text-3xl font-bold">
              Watch anywhere. Cancel anytime.
            </h2>
            <p className="text-white text-lg font-bold">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="flex gap-5">
              <input
                type="text"
                placeholder="Email address"
                className="w-96 h-14 rounded-lg px-5 bg-[rgba(0,0,0,0.7)] border border-lightgrey text-white"
                ref={inputRef}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <button
                className="w-40 h-14 rounded-lg bg-netflixRed text-white text-xl font-bold"
                onClick={handleClick}
              >
                Get Started &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-screen py-10 bg-gradient-to-b from-[rgba(11,20,59,0.8)] to-[rgba(0,0,0,1)] justify-center flex-wrap gap-5">
        <HomeCard
          imgLink="https://res.cloudinary.com/dlqpxszzo/image/upload/v1682507175/NetflixClone/tv_niz2xf.png"
          h1="Enjoy on your TV."
          h2="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
        />

        <HomeCard
          imgLink="https://res.cloudinary.com/dlqpxszzo/image/upload/v1682507175/NetflixClone/everywhere_akhrov.png"
          h1="Watch everywhere."
          h2="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        />

        <HomeCard
          imgLink="https://res.cloudinary.com/dlqpxszzo/image/upload/v1682507174/NetflixClone/children_e7bkgu.png"
          h1="Create profiles for children."
          h2="Send children on adventures with their favourite characters in a space made just for them — free with your membership."
        />

        <HomeCard
          imgLink="https://res.cloudinary.com/dlqpxszzo/image/upload/v1682507174/NetflixClone/download_fk2ick.png"
          h1="Download your shows to watch offline."
          h2="Save your favourites easily and always have something to watch."
        />
      </div>
      <div className="w-screen py-14 flex flex-col justify-center items-center">
        <div className="w-3/4">
          <h1 className="text-white text-5xl font-bold mb-5">
            Frequently Asked Questions
          </h1>
          <Accordion allowZeroExpanded>
            {faq.map((item, index) => (
              <AccordionItem key={index} className="mb-3">
                <AccordionItemHeading className="text-white bg-netflixBlue py-6 text-3xl pl-5 hover:bg-netflixBlue2">
                  <AccordionItemButton className="text-white text-2xl font-bold">
                    {item.question}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="text-white text-xl font-bold py-7 px-5 bg-netflixBlue2">
                    {item.ans}
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-5">
            <p className="text-xl text-white font-semibold">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="flex gap-2 mt-5">
              <input
                type="text"
                placeholder="Email address"
                className="w-96 h-14 rounded-lg px-5 bg-netflixBlue border border-lightgrey text-white"
              />
              <button className="w-40 h-14 rounded-lg bg-netflixRed text-white text-xl font-bold">
                Get Started &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

// <Accordion
//allowZeroExpanded={true}
//>
//  <AccordionItem>
//    <AccordionItemHeading>
//      <AccordionItemButton className="text-white bg-netflixBlue py-5 text-3xl pl-5">
//        What is Netflix?
//      </AccordionItemButton>
//    </AccordionItemHeading>
//    <AccordionItemPanel className="text-white">
//      <p>ans</p>
//    </AccordionItemPanel>
//  </AccordionItem>
//</Accordion>
