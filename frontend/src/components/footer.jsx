import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-300 bg-neutral-50 px-5 md:px-10 ">
      <div className="flex flex-col md:flex-row justify-between sm:grid grid-cols-2 md:grid-cols-3">
        <div className="mb-6 md:mb-0 md:mr-10 md:ml-14  lg:ml-14">
          <h3 className="text-md font-semibold mb-4">References</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-600 hover:text-custom-red"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-6 md:mb-0 lg:mr-14">
          <h3 className="text-md font-semibold mb-4">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-600 hover:text-custom-red"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div lg:mr-4 md:mr-0>
          <h3 className="text-md font-semibold mb-4 ">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-600 hover:text-custom-red"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-700 mt-8">
          <p className="text-sm text-neutral-600 pt-2 mt-4 lg:mb-0">
            © 2023 MindCanvas, Inc. All rights reserved.
          </p>
      </div>
    </footer>
  );
};

export default Footer;
