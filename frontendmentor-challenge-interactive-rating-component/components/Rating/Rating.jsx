import { useState } from "react";
import styles from "./Rating.module.css";

const Rating = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedRating, setSelectedRating] = useState();

  const handleClickRating = (rating) => {
    setSelectedRating(rating);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      {isSubmitted ? (
        <section className={styles.thank__you}>
          <figure className={styles.figure__thank}>
            <img src="/illustration-thank-you.svg" alt="Thank You" />
          </figure>
          <div className={styles.rating__display}>
            <p className={styles.rating__given}>
              You gave {selectedRating} out of 5
            </p>
          </div>
          <div className={styles.message}>
            <h1 className={styles.thank__title}>Thank You!</h1>
            <p className={styles.thank__desc}>
              We appreciate you giving time to give a rating. If you ever need
              support, please do not hesitate to get in touch!
            </p>
          </div>
        </section>
      ) : (
        <form onSubmit={handleFormSubmit} className={styles.form}>
          <figure className={styles.figure}>
            <img src="/icon-star.svg" alt="Star" />
          </figure>

          <div className={styles.header}>
            <h1 className={styles.title}>How Did We Do?</h1>
            <p className={styles.desc}>
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
          </div>
          <div className={styles.btn__group}>
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                type="button"
                onClick={() => handleClickRating(rating)}
                className={styles.btn}
              >
                {rating}
              </button>
            ))}
          </div>

          <button
            disabled={selectedRating === undefined}
            className={styles.btn__submit}
          >
            Submit
          </button>
        </form>
      )}
    </>
  );
};

export default Rating;
