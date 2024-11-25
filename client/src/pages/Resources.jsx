import { useState } from "react";
import {
  FaPhoneAlt,
  FaLinkedin,
  FaUserTie,
  FaBook,
  FaBriefcase,
  FaRegMoneyBillAlt,
  FaFileAlt,
  FaPiggyBank,
  FaBabyCarriage,
  FaPlayCircle,
  FaVideo,
  FaHeadphones,
  FaPodcast,
  FaDollarSign,
  FaInfoCircle,
  FaUniversity,
  FaHandsHelping,
  FaEnvelope,
  FaPassport,
  FaBookReader,
  FaGlobeAmericas,
  FaGraduationCap,
  FaChalkboard,
  FaBookOpen,
  FaLaptopCode,
  FaLightbulb,
  FaGavel,
  FaHome,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaHeartbeat,
  FaChevronDown,
  FaChevronUp,
  FaGlobe,
  FaHandHoldingHeart,
  FaFlag,
} from "react-icons/fa";

function Resources() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="min-h-screen w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-700 via-black to-black py-10">
        {/* Women in Tech career resources */}
        <div className="max-w-5xl mx-auto bg-black p-6 rounded-[30px] border-pink-400 border-2 border-opacity-15 hover:border-opacity-55 transform transition duration-700 ease-in-out hover:scale-100 mb-8 mt-20">
          <div className=" mb-8">
            <h2 className="text-3xl font-semibold text-slate-200 ">
              Women in Tech Career Resources
            </h2>
            <p className="mt-4 text-gray-600">
              Discover various career opportunities, training programs, and
              resources specifically designed to empower women in the tech
              industry. Stay informed about job openings, internships, and more.
              <a
                href="https://example.com/career-opportunities"
                className="text-white underline hover:no-underline hover:text-pink-800"
              >
                {" "}
                Read more
              </a>
            </p>
          </div>
          <div className="relative">
            <button
              className="flex items-center justify-between w-full text-left bg-pink-200 px-4 py-3 rounded-[30px] text-white font-semibold shadow-md"
              onClick={toggleDropdown}
            >
              <span className="text-black">
                <FaBriefcase
                  className="text-pink-600 text-2xl mr-3 inline-block"
                  aria-label="Briefcase icon"
                />
                Current Job Openings
              </span>
              {isDropdownOpen ? (
                <FaChevronUp className="text-pink-600 text-2xl" />
              ) : (
                <FaChevronDown className="text-pink-600 text-2xl" />
              )}
            </button>

            {isDropdownOpen && (
              <div className="bg-black mt-4 rounded-[30px] shadow-lg p-4">
                <ul className="space-y-2 text-md">
                  <li>
                    <FaBriefcase className="text-gray-600 mr-2 inline-block" />{" "}
                    <strong className="text-white">Software Developer:</strong>{" "}
                    <a
                      href="https://www.diversifytech.com/job-board/#browse"
                      className="text-pink-500"
                    >
                      Apply Now
                    </a>
                  </li>
                  <li>
                    <FaBriefcase className="text-gray-600 mr-2 inline-block" />{" "}
                    <strong className="text-white">Data Scientist:</strong>{" "}
                    <a
                      href="https://www.diversifytech.com/job-board/#browse"
                      className="text-pink-500"
                    >
                      Apply Now
                    </a>
                  </li>
                  <li>
                    <FaBriefcase className="text-gray-600 mr-2 inline-block" />{" "}
                    <strong className="text-white">UI/UX Designer:</strong>{" "}
                    <a
                      href="https://www.diversifytech.com/job-board/#browse"
                      className="text-pink-500"
                    >
                      Apply Now
                    </a>
                  </li>
                  <li>
                    <FaBriefcase className="text-gray-600 mr-2 inline-block" />{" "}
                    <strong className="text-white">Project Manager:</strong>{" "}
                    <a
                      href="https://www.diversifytech.com/job-board/#browse"
                      className="text-pink-500"
                    >
                      Apply Now
                    </a>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-gray-400">
                  Explore more opportunities:
                </p>
                <ul className="mt-2 space-y-1 text-sm text-gray-400">
                  <li>
                    <a
                      href="https://example.com/internships"
                      className="text-pink-500 hover:underline"
                    >
                      Internships
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://example.com/training-programs"
                      className="text-pink-500 hover:underline"
                    >
                      Training Programs
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://example.com/certifications"
                      className="text-pink-500 hover:underline"
                    >
                      Certifications
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Counseling */}
        <div className="max-w-5xl mx-auto bg-black p-6 rounded-[30px] border-pink-400 border-2 border-opacity-15 hover:border-opacity-55 transform transition duration-700 ease-in-out hover:scale-100 mb-8 mt-20">
          <div className=" mb-8">
            <h2 className="text-3xl font-semibold text-white">
              Career Development Resources
            </h2>
            <p className="mt-4 text-gray-600">
              Explore various resources that help women advance in their careers
              and education. These platforms provide guidance, courses, and
              opportunities to grow professionally.
              <a
                href="https://www.careerguide.com"
                className="text-white underline"
              >
                {" "}
                Read more
              </a>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div>
              <p className="text-white">Skill Development:</p>
              <ul className="mt-4 space-y-2 text-lg">
                <a href="https://www.coursera.org">
                  <li>
                    <strong className="text-white">
                      <FaBook
                        className="text-pink-600 text-3xl mr-3 inline-block"
                        aria-label="Book icon"
                      />
                      Coursera for Women
                    </strong>{" "}
                  </li>
                </a>
                <a href="https://www.womenwhocode.com">
                  <li>
                    <strong className="text-white">
                      <FaChalkboardTeacher
                        className="text-pink-600 text-3xl mr-3 inline-block"
                        aria-label="Teacher icon"
                      />
                      Women Who Code
                    </strong>{" "}
                  </li>
                </a>
              </ul>
            </div>
            <div>
              <p className="text-white">Educational Opportunities:</p>
              <ul className="mt-4 space-y-2 text-lg">
                <a
                  href="https://www.edx.org/scholarships"
                  className="text-pink-500"
                >
                  <li>
                    <strong className="text-white">
                      <FaUniversity
                        className="text-pink-600 text-3xl mr-3 inline-block"
                        aria-label="University icon"
                      />
                      EdX Women's Scholarships
                    </strong>{" "}
                  </li>
                </a>
                <a
                  href="https://www.scholarships.com"
                  className="text-pink-500"
                >
                  <li>
                    <strong className="text-white">
                      <FaGraduationCap
                        className="text-pink-600 text-3xl mr-3 inline-block"
                        aria-label="Graduation cap icon"
                      />
                      Scholarship for Women in STEM
                    </strong>{" "}
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
          {/*Mentorship for women in STEM */}
          <div className="border-pink-400 border-2 border-opacity-15 hover:border-opacity-55 w-[450px] bg-black p-6 rounded-[30px] shadow-lg hover:shadow-2xl  transform transition duration-300 ease-in-out hover:scale-100 mx-auto">
            <div className="flex items-center mb-4">
              <FaLightbulb
                className="text-pink-600 text-3xl mr-3"
                aria-label="Lightbulb icon"
              />
              <h2 className="text-2xl font-semibold text-white">
                Mentorship for Women in STEM
              </h2>
            </div>

            <ul className="mt-4 space-y-2 text-lg ">
              <a
                href="https://www.stemmentorship.org"
                className="text-pink-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <strong className="text-pink-300 font-light">
                    STEM Mentorship Program
                  </strong>{" "}
                </li>
              </a>
              <a
                href="https://www.findamentor.org"
                className="text-pink-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <strong className="text-pink-300 font-light">
                    Find a Mentor Organization
                  </strong>{" "}
                </li>
              </a>
            </ul>
          </div>

          {/* Free online courses */}
          <div className="border-pink-400 border-2 border-opacity-15 hover:border-opacity-55 w-[450px] bg-black p-6 rounded-[30px] shadow-lg hover:shadow-2xl  transform transition duration-300 ease-in-out hover:scale-100 mx-auto">
            <div className="flex items-center mb-4">
              <FaLaptopCode
                className="text-pink-600 text-3xl mr-3"
                aria-label="Laptop icon"
              />
              <h2 className="text-2xl font-semibold text-white">
                Free Online Courses
              </h2>
            </div>

            <ul className="mt-4 space-y-2 text-lg">
              <a
                href="https://www.coursera.org"
                className="text-pink-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <strong className="text-pink-300 font-light">Coursera</strong>{" "}
                </li>
              </a>
              <a
                href="https://www.edx.org"
                className="text-pink-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <strong className="text-pink-300 font-light">edX</strong>{" "}
                </li>
              </a>
              <a
                href="https://www.khanacademy.org"
                className="text-pink-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <strong className="text-pink-300 font-light">
                    Khan Academy
                  </strong>{" "}
                </li>
              </a>
            </ul>
          </div>

          {/* Finanacial aid, scholarships, etc */}
          <div className="border-pink-400 border-2 border-opacity-15 hover:border-opacity-55 w-[450px] bg-black p-6 rounded-[30px] shadow-lg hover:shadow-2xl  transform transition duration-300 ease-in-out hover:scale-100 mx-auto">
            <div className="flex items-center mb-4">
              <FaPiggyBank
                className="text-pink-600 text-3xl mr-3"
                aria-label="Piggy bank icon"
              />
              <h2 className="text-2xl font-semibold text-white">
                Government Financial Aid
              </h2>
            </div>

            <ul className="mt-4 space-y-2 text-lg">
              <a
                href="https://studentaid.gov/understand-aid/types/grants/pell"
                className="text-pink-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <strong className="text-pink-300 font-light">
                    Pell Grants
                  </strong>{" "}
                </li>
              </a>
              <a
                href="https://fafsa.ed.gov"
                className="text-pink-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <strong className="text-pink-300 font-light">FAFSA:</strong>{" "}
                </li>
              </a>
              <a
                href="https://www.benefits.gov"
                className="text-pink-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <strong className="text-pink-300 font-light">
                    Other Assistance Programs
                  </strong>{" "}
                </li>
              </a>
            </ul>
          </div>

          {/* International scholarships */}
          <div className="border-pink-400 border-2 border-opacity-15 hover:border-opacity-55 w-[450px] bg-black p-6 rounded-[30px] shadow-lg hover:shadow-2xl  transform transition duration-300 ease-in-out hover:scale-100 mx-auto">
            <div className="flex items-center mb-4">
              <FaGlobeAmericas
                className="text-pink-600 text-3xl mr-3"
                aria-label="Globe icon"
              />
              <h2 className="text-2xl font-semibold text-white">
                International Scholarships
              </h2>
            </div>

            <ul className="mt-4 space-y-2 text-lg">
              <a
                href="https://foreign.fulbrightonline.org"
                className="text-pink-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <strong className="text-pink-300 font-light">
                    Fulbright Program
                  </strong>{" "}
                </li>
              </a>
              <a
                href="https://www.chevening.org"
                className="text-pink-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <strong className="text-pink-300 font-light">
                    Chevening Scholarships
                  </strong>{" "}
                </li>
              </a>
              <a
                href="https://www.daad.de/en/"
                className="text-pink-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <strong className="text-pink-300 font-light">
                    DAAD Scholarships
                  </strong>{" "}
                </li>
              </a>
            </ul>
          </div>

          {/* Childcare support*/}
          <div className="border-pink-400 border-2 border-opacity-15 hover:border-opacity-55 w-[450px] bg-black p-6 rounded-[30px] shadow-lg hover:shadow-2xl  transform transition duration-300 ease-in-out hover:scale-100 mx-auto">
            <div className="flex items-center mb-4">
              <FaBabyCarriage
                className="text-pink-600 text-3xl mr-3"
                aria-label="Baby carriage icon"
              />
              <h2 className="text-2xl font-semibold text-white">
                Childcare Support
              </h2>
            </div>

            <ul className="mt-4 space-y-2 text-lg">
              <a
                href="https://www.universitychildcare.com"
                className="text-pink-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <strong className="text-pink-300 font-light">
                    On-Campus Childcare
                  </strong>{" "}
                </li>
              </a>
              <a
                href="https://www.childcareaware.org"
                className="text-pink-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <strong className="text-pink-300 font-light">
                    Childcare Subsidies:
                  </strong>{" "}
                </li>
              </a>
              <a
                href="https://www.womenshealth.gov/childcare"
                className="text-pink-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <strong className="text-pink-300 font-light">
                    Childcare Resources
                  </strong>{" "}
                </li>
              </a>
            </ul>
          </div>

          {/* Podcasts, videos focusing on women's education */}
          <div className="border-pink-400 border-2 border-opacity-15 hover:border-opacity-55 w-[450px] bg-black p-6 rounded-[30px] shadow-lg hover:shadow-2xl  transform transition duration-300 ease-in-out hover:scale-100 mx-auto">
            <div className="flex items-center mb-4">
              <FaPodcast
                className="text-pink-600 text-3xl mr-3"
                aria-label="Podcast icon"
              />
              <h2 className="text-2xl font-semibold text-white">
                Podcasts and Videos
              </h2>
            </div>

            <ul className="mt-4 space-y-2 text-lg">
              <a
                href="https://www.womeninstempodcast.com"
                className="text-pink-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <strong className="text-pink-300 font-light">
                    Women in STEM Podcast
                  </strong>{" "}
                </li>
              </a>
              <a
                href="https://www.ted.com/topics/women+in+education"
                className="text-pink-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <strong className="text-pink-300 font-light">
                    TED Talks on Women's Education
                  </strong>{" "}
                </li>
              </a>
              <a
                href="https://www.youtube.com/playlist?list=PL8dPuuaLjXtNcAJRf3bE4lhOQ7cq7gNVP"
                className="text-pink-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <strong className="text-pink-300 font-light">
                    Personal Development Videos
                  </strong>{" "}
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resources;
