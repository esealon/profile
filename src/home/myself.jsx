import Box from "@mui/material/Box";
import CenteredBox from "../CenteredBox";

import React, { useState } from "react";
import { Button, Collapse, Typography } from "@mui/material";
import "../styles.css";

const Myself = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box onClick={handleClick}>
        <CenteredBox>
          <br />
          {open ? (
            <p>Collapse text</p>
          ) : (
            <p>If you want to know a little bit about myself, click here...</p>
          )}

          <Collapse in={open}>
            <p style={{ height: "15px" }}></p>
            <p>
              I was born and raised in a lovely Catholic family in Guatemala
              city, my dad has always been quite adventurous, he loves to travel
              to visit the United States all the time and when I was a kid,
              every time he will leave, I wouldn’t like it, but at the same I
              would think how would be to get into a plane and go there.
            </p>
            <p style={{ height: "10px" }}></p>
            <p>
              I love movies and tv shows, is easy for me to immerse myself in
              that amazing world of adventure, comedy, love and fantasy, this
              made me wonder how the world outside Guatemala would be like.
            </p>
            <p style={{ height: "10px" }}></p>
            <p>
              Thanks to my dad I started visiting United States since I was 13
              years old, since my very first trip I decided I wanted to live
              there. I prepared myself by learning English and studying very
              hard at school, but the opportunity never came, I tried for 10
              years. I was already an engineer and working in Guatemala when the
              opportunity to go on a scholarship to Europe while studying the
              masters came to me.
            </p>
            <p style={{ height: "10px" }}></p>
            <p>
              The decision wasn’t easy, I had to choose a country between Spain,
              Czech Republic and Estonia. I chose Estonia because of their
              technological approach, language, weather and people. I wanted
              this to be a challenge, where I would make the most of it.
            </p>
            <p style={{ height: "10px" }}></p>
            <p>
              I got the scholarship to study the master in Industrial
              Engineering and Management at Tallinn University of Technology for
              10 months. I went to Estonia on August 2016, just after a few
              months I felt really comfortable, I started to make a lot of
              friends and enjoying my time there. I started to look at my
              options to stay longer. I had to applied as a regular student and
              get a job which both things happened quite fast. Estonia is the
              type of country that tells you “stay” and gives you all what you
              need to do so.
            </p>
            <p style={{ height: "10px" }}></p>
            <p>
              Before the end of my first year of the master, I got a job in
              Ericsson Estonia as Engineer (I love this company and their
              culture, it gave me the opportunity to grow as a professional and
              to travel around world, I even went to China twice). I was so
              happy, now I could stay longer as I wanted, I finished the master
              a year later (2018) and learned the language. I was trying to
              learn about their culture as much as I could, anybody who knows
              something about Estonia, would know about the Signing Revolution
              and their love for dancing. I was so happy living and working in
              such places, but then corona hit, and everything changed.
            </p>
            <p style={{ height: "10px" }}></p>
            <p>
              It was the end of February 2020 when the world realized that
              corona was a worldwide crisis and Estonia was not the exception,
              cases starting to rise dramatically and from one day to the other
              we couldn’t go to the office anymore, I worked from home for
              almost 2 years. I am a very sociable person, and this was just too
              much for me. After 6 years in Estonia, I knew that it was time to
              move on, but to where? or to what? (my time, friends and things I
              did in Estonia will be forever in my mind and heart).
            </p>
            <p style={{ height: "10px" }}></p>
            <p>
              The opportunity to go to the UK came to me on 2022 and I was quite
              excited because I am a big fan of Harry Potter, and the English
              culture is very interesting to me. Now I have been living and
              working in the UK (London) for more than 2 years and loving every
              minute of it. The variety of people you can find and things you
              can do here are just great. I am working as an Engineer in a great
              company.{" "}
            </p>
            <p style={{ height: "10px" }}></p>
            <p>
              My passion for programming started since I moved to the UK, I
              learned by taking online courses and now practicing using what I
              know and taking it to the next level by using AI and DOCs from the
              latest technologies available for web development.
            </p>
            <p style={{ height: "10px" }}></p>
            <p>
              I am excited about the future, because I know it holds many
              challenges for me and I have the energy and attitude to take them.
              If you read this far, uff, let me tell you: Thank you very much!
            </p>
          </Collapse>
        </CenteredBox>
      </Box>
    </>
  );
};

export default Myself;
