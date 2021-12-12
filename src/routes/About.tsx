import CreditsList from "components/CreditsList";

export default function AboutRoute() {
  return (
    <div>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Curabitur ac neque pellentesque ante suscipit fermentum sit amet et leo.
        Etiam non erat vitae elit pulvinar pretium.
        Duis faucibus consectetur viverra.
      </p>
      <p>
        Sed urna lectus, lobortis nec ultricies vel, lobortis tincidunt nibh.
        Nulla facilisi.
        Phasellus ac orci in nibh molestie ultricies vel eget dolor.
        Duis ligula mi, mollis in consequat ut, tempus eget risus. Morbi sed magna nisl.
        Nulla nec nisi molestie, efficitur sapien quis, volutpat diam.
      </p>

      <h3 className="mt-5">License</h3>
      <p>
        MIT License - Copyright (c) 2021 MakeMake00<br />
        <a
          href="https://github.com/MakeMake00/coindash/blob/main/LICENSE"
          rel="noopener, noreferrer"
          target="_blank"
        >
          Read the full License
        </a>
      </p>

      <h3 className="mt-5">Credits</h3>
      <CreditsList />

    </div>
  );
}

