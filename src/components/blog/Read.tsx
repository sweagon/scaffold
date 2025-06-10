import { useParams } from "react-router-dom";
import Heading from "../../utils/Heading";
import Section from "../../utils/Section";

// Sample articles data
const articles = [
  {
    id: "1",
    title: "How to Check Website Traffic for Your Business",
    content: [
      {
        topic: "How to Check Website Traffic for Your Business",
        paragraph: `-Or should I cross them off the list? If you’re buying your first home, an investment property, or downsizing, then the real estate agent is going to want to show you a cross-lease property. There is a bit of stigma around cross leases. Some people don’t like them. But when you ask folks why they don’t like them, they’re not really able to say. As this article will demonstrate, cross-leases are not a bad option, provided you know what you are doing, and you keep an eye out for a few red flags.`,
      },
      {
        topic: "What is a Cross Lease?",
        paragraph: `The cross-lease system first started in the 1960s. Property owners were not allowed to subdivide their land unless the section was particularly large.  The cross-lease system was implemented by developers as a creative way of getting around this land size requirement.`,
      },
      {
        topic: "Here’s how it works",
        paragraph: `It is effectively a form of co-ownership.  Rather than subdividing the land, you share ownership of the underlying title with the owner of the other house on the property.    Think of it this way.  It’s like buying a section at the beach with your friend Dave.  He puts a caravan at the front.  You put a caravan at the back.  He gets to use his caravan, and the area around it, for tents, a BBQ and drying his washing.  You get to use your caravan, and the space next to it. But you both own the underlying land together. Under the cross-lease system, instead of caravans, there are two houses on the land (and sometimes more). They are called “Flats”. This name has nothing to do with living with your drunken mates in Dunedin.  Rather in the 1960s the phrase was used to describe a smaller second dwelling on a property, and the name has kind of stuck.  So just like the example of the beach property, you own the land together with the other owner.  They get to use one of the Flats and the area around it, and you get to use the other.`,
      },
      {
        topic: "Delving a bit deeper",
        paragraph: `The ownership papers for land are called a Records of Title.  The Record of Title used to be a piece of paper stored at a government department Toitu Te Whenua Land Information New Zealand, which is known as LINZ for short. Now the Record of Title is stored electronically online.  Let’s return to the example of the section at the beach.  Dave doesn’t own the half with his caravan on.  You both own the whole property together. If you go to LINZ and look at the Record of Title for the beach section you will see that Dave is recorded as the owner of an “undivided half share in fee simple” and you have the other half.`,
      },
      {
        topic:
          "Ok, so I get this “undivided half share thingy, but what is fee simple?”",
        paragraph: `Fee simple is another way of saying Freehold.  This is the most common form of property ownership in New Zealand.  Likewise, when you look at the Record of Title for a cross-lease property with two Flats, it will say that one of the owners has an undivided half share in fee simple.  If there are three Flats on the property, then it will say “an undivided one-third share in fee simple”.  And so on.`,
      },
      {
        topic: "So why are they called cross-leases?",
        paragraph: `Because Dave is a good mate, you are able to set out some basic ground rules.  Over there is your caravan, and where you park your car.  This over here is my area.  Sort of like a handshake agreement. Dave will respect that. The cross-lease system formalizes this handshake agreement. It uses leases to set out the rules for co-ownership.   When we hear the word Lease, most of us think of a business leasing office space in the city. The cross-lease system uses the same sort of Leases, but with different wording.  A business in town might lease a building for 5-10 years.  The length of the lease is called the term.  With cross-leases, the term of the lease is 999 years.  This is designed so it won’t run out anytime soon. Remember, we have already learned that you own an undivided one half share of the fee simple land with the other owner.  Together with that neighbour you now become landlords.  The two of you lease the space where their flat is located to them.  And vice versa. Put another way, you lease the ‘flats’ that have been built on the land from each other.   The lease provides that you have the exclusive right to use the Flat.  It provides that the neighbours can’t just wander over anytime they like, or use the backyard for a BBQ. This lease is then registered against the Record of Title.  So, when you look at the title at LINZ, in addition to an undivided half share in fee simple, it will say that you also own a Lease of Flat 2.   See also What should I check before buying a cross lease?`,
      },
      {
        topic: "What should I check before buying a cross lease?",
        paragraph: `So we learned in the last article (are cross leases ok to buy) that cross-leases are ok, but you need to check some things pretty carefully. The main issue with cross leases is that the flats plan can be incorrect. The title will often have a diagram attached to it showing the location of the flat on the property. The bold black outline is called the footprint. This is the area that you are leasing from all the owners of the land. Here’s an example of the sort of thing you are looking for:`,
        imageUrl: "/illustration-1.jpeg",
      },
      {
        paragraph: `In this example we are looking at Flat 2, which is down a right-of-way from the road. It is important to check that the footprint on the title matches the outline of the dwelling, decks and garage on the property. Sometimes the previous owner changes the dwelling, by building a conservatory, increasing the size of the deck or even putting on another bedroom or carport. If an alteration has been made, then the title may need to be updated to reflect this. Let’s say in the above example that a previous owner had increased the size of the deck, and had built a convervatory off the back of the house. An eagle eye view of the property would now look like this:`,
        imageUrl: "/illustration-1.jpeg",
      },
      {
        paragraph: `Because the conservatory and expanded deck do not fall within the original footprint, this means that the owner doesn’t have the legal ability to use these areas.`,
      },
      {
        topic: "If the title needs updating, how do you go about this?",
        paragraph: `The first step is for a surveyor to prepare a new plan, showing the corrected footprint. The lawyer then drafts new cross lease documents. These are then sent to the lawyer for the owner of the other flat for checking and signing. If either owner has a mortgage, then the bank’s consent will also be required. The cost of doing this can run to thousands of dollars. It is therefore important that you check the Flat's plan carefully to ensure there have been no changes to the exterior of the house or garage which are not showing on the plan.`,
      },
      {
        topic:
          "But the agent says the seller obtained a building consent for the changes… is that enough?",
        paragraph: `No, the building consent and the title are two different things. When you make a change to a dwelling, you need to get the council to approve it. The council will issue a building consent, do progress checks during the building process, and issue a code compliance record once they have signed it off as finished. This is different from the title. The title is stored at a different government department, called Toitu Te Whenua Land Information New Zealand, or LINZ for short. LINZ and the councils do not share databases. Applying to update the title to show the amendments to the cross lease is a separate process. So even though the alterations may have a building consent, it does not mean that the title is correct.`,
      },
      {
        topic: "Is there a common area",
        paragraph: `Some cross-lease titles have a “common area”. All landowners share this area, which might be used as a shared driveway or to store rubbish bins. If you don’t want to sunbathe with your neighbour, then it’s a good idea to check where this is, and to see if the garden outside your flat is a shared space.`,
      },
      {
        topic: "So, in summary",
        paragraph: `If you are considering buying a cross-lease property, ask the agent for a copy of the flat’s plan, and check the outline matches the building on the ground. If it doesn’t, there is a potential red flag, but it can likely be fixed. It’s then a good idea to take advice from your solicitor before proceeding with the purchase`,
      },
    ],
    metaDescription:
      "Learn about the cross lease system, its origin, and how it works as a co-ownership solution.",
  },
  {
    id: "what-is-buying-a-house-off-the-plans",
    title: "What is buying a house off the plans",
    content: [
      {
        topic: "Are cross leases ok to buy?",
        paragraph: `-Or should I cross them off the list? If you’re buying your first home, an investment property, or downsizing, then the real estate agent is going to want to show you a cross-lease property. There is a bit of stigma around cross leases. Some people don’t like them. But when you ask folks why they don’t like them, they’re not really able to say. As this article will demonstrate, cross-leases are not a bad option, provided you know what you are doing, and you keep an eye out for a few red flags.`,
      },
      {
        topic: "What is a Cross Lease?",
        paragraph: `The cross-lease system first started in the 1960s. Property owners were not allowed to subdivide their land unless the section was particularly large.  The cross-lease system was implemented by developers as a creative way of getting around this land size requirement.`,
      },
      {
        topic: "Here’s how it works",
        paragraph: `It is effectively a form of co-ownership.  Rather than subdividing the land, you share ownership of the underlying title with the owner of the other house on the property.    Think of it this way.  It’s like buying a section at the beach with your friend Dave.  He puts a caravan at the front.  You put a caravan at the back.  He gets to use his caravan, and the area around it, for tents, a BBQ and drying his washing.  You get to use your caravan, and the space next to it. But you both own the underlying land together. Under the cross-lease system, instead of caravans, there are two houses on the land (and sometimes more). They are called “Flats”. This name has nothing to do with living with your drunken mates in Dunedin.  Rather in the 1960s the phrase was used to describe a smaller second dwelling on a property, and the name has kind of stuck.  So just like the example of the beach property, you own the land together with the other owner.  They get to use one of the Flats and the area around it, and you get to use the other.`,
      },
      {
        topic: "Delving a bit deeper",
        paragraph: `The ownership papers for land are called a Records of Title.  The Record of Title used to be a piece of paper stored at a government department Toitu Te Whenua Land Information New Zealand, which is known as LINZ for short. Now the Record of Title is stored electronically online.  Let’s return to the example of the section at the beach.  Dave doesn’t own the half with his caravan on.  You both own the whole property together. If you go to LINZ and look at the Record of Title for the beach section you will see that Dave is recorded as the owner of an “undivided half share in fee simple” and you have the other half.`,
      },
      {
        topic:
          "Ok, so I get this “undivided half share thingy, but what is fee simple?”",
        paragraph: `Fee simple is another way of saying Freehold.  This is the most common form of property ownership in New Zealand.  Likewise, when you look at the Record of Title for a cross-lease property with two Flats, it will say that one of the owners has an undivided half share in fee simple.  If there are three Flats on the property, then it will say “an undivided one-third share in fee simple”.  And so on.`,
      },
      {
        topic: "So why are they called cross-leases?",
        paragraph: `Because Dave is a good mate, you are able to set out some basic ground rules.  Over there is your caravan, and where you park your car.  This over here is my area.  Sort of like a handshake agreement. Dave will respect that. The cross-lease system formalizes this handshake agreement. It uses leases to set out the rules for co-ownership.   When we hear the word Lease, most of us think of a business leasing office space in the city. The cross-lease system uses the same sort of Leases, but with different wording.  A business in town might lease a building for 5-10 years.  The length of the lease is called the term.  With cross-leases, the term of the lease is 999 years.  This is designed so it won’t run out anytime soon. Remember, we have already learned that you own an undivided one half share of the fee simple land with the other owner.  Together with that neighbour you now become landlords.  The two of you lease the space where their flat is located to them.  And vice versa. Put another way, you lease the ‘flats’ that have been built on the land from each other.   The lease provides that you have the exclusive right to use the Flat.  It provides that the neighbours can’t just wander over anytime they like, or use the backyard for a BBQ. This lease is then registered against the Record of Title.  So, when you look at the title at LINZ, in addition to an undivided half share in fee simple, it will say that you also own a Lease of Flat 2.   See also What should I check before buying a cross lease?`,
      },
      {
        topic: "What should I check before buying a cross lease?",
        paragraph: `So we learned in the last article (are cross leases ok to buy) that cross-leases are ok, but you need to check some things pretty carefully. The main issue with cross leases is that the flats plan can be incorrect. The title will often have a diagram attached to it showing the location of the flat on the property. The bold black outline is called the footprint. This is the area that you are leasing from all the owners of the land. Here’s an example of the sort of thing you are looking for:`,
        imageUrl: "/illustration-1.jpeg",
      },
      {
        paragraph: `In this example we are looking at Flat 2, which is down a right-of-way from the road. It is important to check that the footprint on the title matches the outline of the dwelling, decks and garage on the property. Sometimes the previous owner changes the dwelling, by building a conservatory, increasing the size of the deck or even putting on another bedroom or carport. If an alteration has been made, then the title may need to be updated to reflect this. Let’s say in the above example that a previous owner had increased the size of the deck, and had built a convervatory off the back of the house. An eagle eye view of the property would now look like this:`,
        imageUrl: "/illustration-1.jpeg",
      },
      {
        paragraph: `Because the conservatory and expanded deck do not fall within the original footprint, this means that the owner doesn’t have the legal ability to use these areas.`,
      },
      {
        topic: "If the title needs updating, how do you go about this?",
        paragraph: `The first step is for a surveyor to prepare a new plan, showing the corrected footprint. The lawyer then drafts new cross lease documents. These are then sent to the lawyer for the owner of the other flat for checking and signing. If either owner has a mortgage, then the bank’s consent will also be required. The cost of doing this can run to thousands of dollars. It is therefore important that you check the Flat's plan carefully to ensure there have been no changes to the exterior of the house or garage which are not showing on the plan.`,
      },
      {
        topic:
          "But the agent says the seller obtained a building consent for the changes… is that enough?",
        paragraph: `No, the building consent and the title are two different things. When you make a change to a dwelling, you need to get the council to approve it. The council will issue a building consent, do progress checks during the building process, and issue a code compliance record once they have signed it off as finished. This is different from the title. The title is stored at a different government department, called Toitu Te Whenua Land Information New Zealand, or LINZ for short. LINZ and the councils do not share databases. Applying to update the title to show the amendments to the cross lease is a separate process. So even though the alterations may have a building consent, it does not mean that the title is correct.`,
      },
      {
        topic: "Is there a common area",
        paragraph: `Some cross-lease titles have a “common area”. All landowners share this area, which might be used as a shared driveway or to store rubbish bins. If you don’t want to sunbathe with your neighbour, then it’s a good idea to check where this is, and to see if the garden outside your flat is a shared space.`,
      },
      {
        topic: "So, in summary",
        paragraph: `If you are considering buying a cross-lease property, ask the agent for a copy of the flat’s plan, and check the outline matches the building on the ground. If it doesn’t, there is a potential red flag, but it can likely be fixed. It’s then a good idea to take advice from your solicitor before proceeding with the purchase`,
      },
    ],
    metaDescription:
      "Learn about the cross lease system, its origin, and how it works as a co-ownership solution.",
  },
  {
    id: "the-importance-of-a-good-legal-team",
    title: "The importance of a good legal team",
    content: [
      {
        topic:
          "Ten things to look out for before buying a house that is still being built",
        paragraph: `I once had a client come in to see me about a problem with their new apartment in New Lynn. They couldn’t fit a double bed in their master bedroom, and wanted to know if anything could be done about it. They had purchased the apartment “off the plans”, meaning they had been sold the apartment before it was constructed. They had looked at the shiny drawings and model prepared by the architect, and signed an agreement to purchase the property. What they didn’t realise was that a supporting column would be built through the of the master bedroom. This was just represented on the plans as a circle with an ‘X’ through the middle. It didn’t look like much on the page. In reality this column was right where they would have put their bed. And they were now confined to a single bed, which, while romantic, was not always practical.`,
      },
      {
        topic: "Advantages of buying a house that is still to be built",
        paragraph: `There are advantages with buying off the plans. At the end of the process, you get a brand new house. Everything is shiny and new. And because the house is being built to the latest building code, chances are that it is warmer and better insulated than one that was built 50 years ago.`,
      },
      {
        topic: "The disadvantages",
        paragraph: `The major downside with buying off the plans is that you can’t walk around and inspect the final product. What you picture in your mind may be a little different to what you get. Not surprisingly, most sale and purchase agreements for off the plan developments are skewed in favour of the developer. I had some clients who were buying in a new development next to the park. The plans they were shown when they signed up to buy the property had a pool style fence along the backyard, affording a view across the park. The builder elected to change the plans, and constructed a six-foot timber fence instead, completely blocking the view. Under the terms of the sale and purchase agreement, there was nothing they could do about it.`,
      },
      {
        topic: "Waiting time",
        paragraph: `Another disadvantage of buying off the plans is that you will likely have to wait a year or two for the build to be completed. In my experience, developments inevitably run into a few hiccups, and it always takes a bit longer than the agent predicts. This can be a bit of a gamble. If property prices increase, then that’s a bonus, as you have locked in the purchase price at today’s value. However, if the property market crashes, you could find yourself having to pay more for a property than if you had walked in off the street after it was finished. This happened for some of my clients who signed up in 2021 when the market was still buoyant post covid, then the market dipped 10% and they still had to fork out the price they had agreed the year before. They found this a bit ouchy… The other issue is that once the agreement is signed, you are locked in and must pay the purchase price as soon as the developer notifies you that the build is finished. A lot can happen in the meantime. If you lose your job, your relationship ends, or circumstances change, then you may find it difficult to come up with the purchase price a year or two into the future. You also need to check any finance approval from your bank, as it may only be valid for a set period (such as three months).`,
      },
      {
        topic:
          "So, what clauses should I look out for in agreements when buying off the plans?",
        paragraph: `It’s easy to stand in a container in the middle of a yard and imagine your n group-hover:z-auto transition-allew house or apartment. But before you get too excited and sign up to something, there are a few things that are worth checking out Property development is a tough game. A developer can make good money when the market is heading in the right direction, but when the squeeze comes on, they are often the first to go under. They usually price in an allowance for small increases in building materials and labour, but when these suddenly increase, or there are delays in the building project, then the profit margin can evaporate quickly leaving the developer out of pocket. No surprises therefore that the first companies to go into liquidation during the current economic down-turn were building developers. It can be extremely upsetting, not to mention financially devastating, to get half way through a build and find that the developer is unable to afford to complete the project, and that the bank has appointed a liquidator or receiver. It pays therefore to do a bit of homework before choosing to buy off the plans. Is the developer well established, and well-funded? Have they completed developments like this in the past? Do they have a good reputation? We recommend that you do a bit of research, and find another development they have recently completed elsewhere. Then drive over and look at it. Be a bit cheeky – knock on a door and ask someone what their experience was like. This will help you avoid a costly mistake.`,
      },
      {
        topic: "What happens to the deposit?",
        paragraph: `Given the risks with developers not completing the project, it is imperative to ensure that any funds you pay for the deposit or instalments are protected until the building is finished. Usually this is achieved by either the lawyer, the real estate agent or a third party retaining the deposit as a “stakeholder”. This means that all of the parties trust them to look after it until the project is complete. If there is a problem, then they pay it back to you as the purchaser. If the developer completes the work, then the deposit is released to them when they hand over the title and the final code compliance certificate from the council. You need to carefully check the wording around this in the agreement. I met a very dejected purchaser recently who had poured their entire life savings into a building project, and the terms allowed for the payments to be released to the developer in stages. The developer had subsequently gone into liquidation, and the deposit of over a $100,000 had been lost. It’s important therefore to pay careful attention to the clauses in the agreement about what happens to the deposit.`,
      },
      {
        topic: "Is there a sunset clause?",
        paragraph: `Once you have signed an agreement, you are locked in to buying the property. But what happens when the builder drags their heels, and the build takes longer than expected? Meantime you are living cramped in the basement at your in-laws. To avoid having to endure yet another Wednesday night tuna bake special with the mother-in-law, I recommend you ensure there is a sunset clause added to the agreement. This specifies the date by which the developer must finish the property. If it is not completed by this date, it allows you to cancel the agreement and require your deposit to be refunded.`,
      },
      {
        topic: "What are the circumstances where the price can be increased?",
        paragraph: `As always, the devil is in the fine print. It pays to watch out for clauses that allow the developer to pass on any increase in the price of building materials. Otherwise this could bump the price up to quite a bit more than you were budgeting on!'`,
      },
      {
        topic: "Will the developer be completing the building in stages?",
        paragraph: `If it’s a big project, then the developer will likely be completing it in stages. This may result in you being required to pay the purchase price and move into the property even though there is construction work still going on on other side of the street. This can be a bit niggly, so look through the agreement to see what it says about this.`,
      },
      {
        topic: "If in doubt, check it out",
        paragraph: `Each off the plans agreement is different. But they all have one thing in common. They are all drafted by the developers’ lawyer, and therefore all heavily favour the developer. I therefore recommend you get the agreement reviewed by an experienced lawyer before you sign.`,
      },
    ],
    metaDescription:
      "Learn about the cross lease system, its origin, and how it works as a co-ownership solution.",
  },
];

const Read = () => {
  const { read } = useParams<{ read: string }>(); // Retrieves article title from URL params
  const article = articles.find((a) => a.id === read); // Find the corresponding article

  // If article is not found, show a 404-like message
  if (!article) {
    return (
      <Section
        id="read"
        ariaLabel="Read articles"
        className=" md:!pt-48 !pt-32"
      >
        <Heading level={1}>Article Not Found</Heading>
        <p>The article you're looking for doesn't exist or has been moved.</p>
      </Section>
    );
  }

  return (
    <>
      <Section
        id="read"
        ariaLabel="Read article"
        className=" md:!pt-48 !pt-32 max-w-screen-xl mx-auto md:space-y-24 sm:space-y-16 space-y-8"
      >
        <div className="max-w-screen-lg mx-auto flex flex-col gap-8 text-center">
          <p className="font-bold">Feb 20, 2025</p>
          <Heading level={1}>{article.title}</Heading>
          <ul className="flex justify-center divide-x [&>li]:px-2">
            <li>Marketing</li>
            <li>SEO</li>
            <li>Business</li>
          </ul>
          <div className="aspect-video object-cover rounded-xl bg-black" />
        </div>
        <ul className="space-y-8">
          {article.content.map((block, index) => (
            <li key={index} className="md:text-lg md:font-light space-y-4">
              {/* Render the topic heading */}
              <Heading level={2} className="lg:!text-[calc(0.5rem+1vw)]">
                {block.topic}
              </Heading>
              {/* Render the paragraph */}
              <p>{block.paragraph}</p>
              {/* Conditionally render the image if it exists */}
              {block.imageUrl && (
                <img
                  src={block.imageUrl}
                  alt={`Illustration for: ${block.topic}`}
                  className="w-1/3 object-cover rounded-xl mb-4"
                />
              )}
            </li>
          ))}
        </ul>
        <div className="space-y-8">
          <Heading level={2}>You might also like to read</Heading>
          <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
            <div className="aspect-[2/3] p-4 flex items-end bg-black bg-contain bg-no-repeat rounded-2xl">
              {/* <div className="p-4 bg-[#9C9C9C] rounded-xl">
            <span>Marketing / SEO</span>
            <Heading level={4}>
              How to Check Website Traffic for Your Business
            </Heading>
          </div> */}
            </div>
            <div className="aspect-[2/3] p-4 flex items-end bg-black bg-contain bg-no-repeat rounded-2xl"></div>
            <div className="aspect-[2/3] p-4 flex items-end bg-black bg-contain bg-no-repeat rounded-2xl"></div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Read;
