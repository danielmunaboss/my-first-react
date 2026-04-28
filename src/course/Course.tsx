import "./Course.css";
const Course = () => {
  return (
    <div>
      <section className="course">
        <h1>Courses We Offer</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <div className="course-col">
            <h3>Intermediated</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
              consequatur sed suscipit expedita ipsa, obcaecati quibusdam
              perferendis quaerat nulla distinctio asperiores, quam deserunt
            </p>
          </div>

          <div className="course-col">
            <h3>Degree</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
              consequatur sed suscipit expedita ipsa, obcaecati quibusdam
              perferendis quaerat nulla distinctio asperiores, quam deserunt
            </p>
          </div>

          <div className="course-col">
            <h3>Post Graduation</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
              consequatur sed suscipit expedita ipsa, obcaecati quibusdam
              perferendis quaerat nulla distinctio asperiores, quam deserunt
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Course;
