import React from 'react'

const Section = ({ title, content }) => {
  return (
    <div
      className=" lg:max-w-4xl md:max-w-2xl max-w-xs mx-auto px-4 py-5 rounded-lg my-20 bg-[#85CA81] text-[#133221] 
                 transition-transform duration-500 transform 
                 sm:hover:-rotate-2 hover:-rotate-6 sm:hover:scale-105"
    >
      <h2 className="text-3xl font-bold mb-4 text-center">
        {title}
      </h2>
      <p className="text-lg">
        {content}
      </p>
    </div>
  )
}

const About = () => {
  return (
    <>
     <div className="text-center py-20 px-4 bg-[#1c4830] text-white">
  <h1 className="text-4xl font-extrabold">
    About SustainaBite
  </h1>
  <p className="mt-4 text-xl max-w-3xl mx-auto font-medium">
    Tackling food waste with purpose and passion - for people and the planet.
  </p>
</div>


      <Section
        title="Who We Are"
        content="SustainaBite is a community-driven platform dedicated to reducing food waste, promoting sustainability, and helping those in need. We connect individuals, restaurants, and organizations to ensure that no food goes to waste."
      />

      <Section
        title="Our Mission"
        content="To build a sustainable ecosystem where excess food is redistributed, organic waste is turned into compost, and awareness about food sustainability is spread widely through engaging blogs and ideas."
      />

      <Section
        title="What We Do"
        content="We enable easy food donations, compost collection scheduling, access to creative leftover recipes, and informative blogs that raise awareness. Users can also purchase organic fertilizers made from compost — closing the loop on food waste."
      />

      <Section
        title="Why It Matters"
        content="Every meal saved is a step towards fighting hunger. Every compost pickup reduces landfill pressure. Every recipe shared inspires someone to waste less. Our services aim to create impact where it matters most — in homes, communities, and the environment."
      />

      <Section
        title="Our Services"
        content="Our services include food donation, compost collection, leftover recipe ideas, organic fertilizer purchase, and educational blogs. Each service is designed to help you contribute meaningfully to a sustainable future."
      />

      <Section
        title="How It Works"
        content="Users can sign up and access all features from a single dashboard. Food donors list what they have; collectors are notified in real-time. Compost contributors schedule pickups. Shoppers browse and buy fertilizers. It's seamless and user-friendly."
      />

      <Section
        title="Our Impact"
        content="To date, we've saved thousands of meals, diverted tons of waste from landfills, and empowered countless individuals with sustainable practices. Our reach continues to grow, thanks to our amazing community of changemakers."
      />

      <Section
        title="Community Voices"
        content="We celebrate the voices that drive change — from home cooks donating food, to compost collectors, to recipe bloggers inspiring creativity. Their stories and testimonials fuel our motivation every day."
      />

      <Section
        title="Sustainability Goals"
        content="SustainaBite contributes directly to multiple UN Sustainable Development Goals including Zero Hunger, Responsible Consumption and Production, and Climate Action. Sustainability is at the core of everything we do."
      />

      <Section
        title="Join the Movement"
        content="Whether you're donating, composting, cooking creatively, or spreading the word — you're part of a change that matters. Let's turn food waste into opportunity, together."
      />
    </>
  )
}

export default About
