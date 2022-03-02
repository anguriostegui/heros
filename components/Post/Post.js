import cn from "classnames";
import capitalize from "../../helpers/Capitalize";
import Date from "../Date";
import styles from "./post.module.css";

export default function Post({
  id,
  text,
  image,
  publishDate,
  likes,
  owner,
  tags,
}) {
  console.log(tags);
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <div className={styles.likes}>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M3.98396 11.6106L9.11804 18.5107C10.5956 20.4964 13.4046 20.4964 14.8821 18.5107L20.0162 11.6106C21.328 9.84746 21.328 7.34218 20.0162 5.57906C18.0958 2.9981 13.6572 3.76465 12.0001 6.54855C10.343 3.76465 5.90434 2.9981 3.98396 5.57906C2.6721 7.34218 2.67209 9.84746 3.98396 11.6106Z'
              fill='url(#paint0_linear_44_301)'
            />
            <path
              d='M3.98396 11.6106L4.58567 11.1629L3.98396 11.6106ZM9.11804 18.5107L9.71975 18.063L9.11804 18.5107ZM14.8821 18.5107L14.2804 18.063L14.2804 18.063L14.8821 18.5107ZM20.0162 11.6106L19.4145 11.1629L19.4145 11.1629L20.0162 11.6106ZM20.0162 5.57906L19.4145 6.02677L19.4145 6.02677L20.0162 5.57906ZM12.0001 6.54855L11.3556 6.93217C11.4908 7.15935 11.7357 7.29855 12.0001 7.29855C12.2644 7.29855 12.5093 7.15935 12.6445 6.93217L12.0001 6.54855ZM3.98396 5.57906L4.58567 6.02677L4.58567 6.02677L3.98396 5.57906ZM3.38224 12.0583L8.51633 18.9584L9.71975 18.063L4.58567 11.1629L3.38224 12.0583ZM8.51633 18.9584C10.2937 21.3472 13.7064 21.3472 15.4838 18.9584L14.2804 18.063C13.1027 19.6457 10.8974 19.6457 9.71975 18.063L8.51633 18.9584ZM15.4838 18.9584L20.6179 12.0583L19.4145 11.1629L14.2804 18.063L15.4838 18.9584ZM20.6179 12.0583C22.1275 10.0294 22.1275 7.1602 20.6179 5.13135L19.4145 6.02677C20.5286 7.52416 20.5286 9.66548 19.4145 11.1629L20.6179 12.0583ZM20.6179 5.13135C19.4536 3.56659 17.5594 3.06474 15.8058 3.30916C14.0565 3.553 12.3166 4.55044 11.3556 6.16494L12.6445 6.93217C13.3406 5.76276 14.6486 4.98497 16.0129 4.7948C17.3731 4.60521 18.6583 5.01057 19.4145 6.02677L20.6179 5.13135ZM12.6445 6.16494C11.6835 4.55044 9.94363 3.553 8.19428 3.30916C6.44076 3.06474 4.54652 3.56659 3.38225 5.13135L4.58567 6.02677C5.34178 5.01057 6.62704 4.60521 7.9872 4.7948C9.35152 4.98497 10.6595 5.76276 11.3556 6.93217L12.6445 6.16494ZM3.38225 5.13135C1.87267 7.1602 1.87266 10.0294 3.38224 12.0583L4.58567 11.1629C3.47152 9.66548 3.47153 7.52416 4.58567 6.02677L3.38225 5.13135Z'
              fill='#3B71FE'
            />
            <defs>
              <linearGradient
                id='paint0_linear_44_301'
                x1='3'
                y1='4'
                x2='16'
                y2='18'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#3B71FE' />
                <stop offset='1' stopColor='#7B61FF' />
              </linearGradient>
            </defs>
          </svg>

          <p className={cn("caption-bold")}>{likes}</p>
        </div>

        <img src={image} className={styles.image} />
      </div>
      <div className={styles.content}>
        <Date dateString={publishDate} />
        <h4 className={cn("body-bold", styles.title)}>{capitalize(text)}</h4>

        <div className={styles.wrapper}>
          <div className={styles.tags}>
            {tags.map((tag, index) => (
              <p key={index} className={cn("caption-bold", styles.tag)}>
                {tag}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
