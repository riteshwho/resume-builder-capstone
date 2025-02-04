// import mainData from "../data";
import { useSelector } from "react-redux";
import "./template1.css";


function Template() {
  let Maindata = useSelector(store => store);
  let data = Maindata.changeTemplateData
  // console.log(data.experience)
  return (
    <>
      <div id="template">
        <div className="header">
          <div className="headerBlock">
            <div className="profile">
              <span>TR</span>
            </div>
            <div>
              <h2>
                {data.PersonalInfo.name} {data.PersonalInfo.Lname}
              </h2>
              <p style={{ fontWeight: "bold", color: "black" }}>
                {data.PersonalInfo.heading}
              </p>
            </div>
          </div>
          <div className="contDetail">
            <ul>
              <li>Email : {data.PersonalInfo.contactDetail.email}</li>
              <li>Mobile : {data.PersonalInfo.contactDetail.mobile}</li>
              <li>Address : {data.PersonalInfo.contactDetail.address}</li>
              <li>City : {data.PersonalInfo.contactDetail.city}</li>
              <li>State : {data.PersonalInfo.contactDetail.state}</li>
              <li>
                Postal code : {data.PersonalInfo.contactDetail.PostalCode}
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="summary">
          <h2>Summary : </h2>
          <p>{data.PersonalInfo.objective}</p>
        </div>
        <hr />
        <div className="proffExperience">
          <div>
            <h3>Work experience : </h3>
          </div>
          <div className="experience">
            <div>
              {data.experience.map((value) => {
                return (
                  <>
                    <h4>{value.title}</h4>
                    <ul>
                      <li>Organization Name : {value.Organization}</li>
                      <li>
                        {value.startDate}-{value.endDate}
                      </li>
                    </ul>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <hr />
        <div className="education">
          <h3>Education : </h3>
          <div className="eduDetails">
            <div>
              <ul>
                <li>Type : {data.education.type}</li>
                <li>University : {data.education.university}</li>
                <li>Degree : {data.education.degree}</li>
                <li>
                  {data.education.startYear} - {data.education.endYear}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="keySkills">
          <h4>Key skills : </h4>
          <ul>
            {data.keySkills.map((value) => {
              return <li>{value}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Template;

