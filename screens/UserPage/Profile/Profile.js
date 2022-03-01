import styles from "./profile.module.css";
import cn from "classnames";
import Link from "next/link";
import Post from "../../../components/Post";
import Image from "next/image";
import capitalize from "../../../helpers/Capitalize";

export default function Profile({
  id,
  picture,
  title,
  firstName,
  lastName,
  email,
  phone,
  registerDate,
  dateOfBirth,
  location,
  gender,
  text,
  posts,
}) {
  return (
    <>
      <Link href='/'>
        <a className={cn("button", styles.button)}>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M17.5 12L6.5 12M6.5 12L11.0882 16M6.5 12L11.0882 8'
              stroke='#363853'
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </a>
      </Link>
      <div className={styles.image_container}>
        {posts.map((post) => (
          <img className={styles.image} src={post.image} />
        ))}
      </div>

      <div className={cn("section section-pt", styles.section)}>
        <div className={styles.container}>
          <img className={styles.avatar} src={picture} />
          <div className={styles.name}>
            <h4 className={cn("body-bold")}>
              {firstName} {lastName}
            </h4>
            <p className={cn("caption")}>{capitalize(title)}.</p>
          </div>

          <div className={styles.info_wrapper}>
            <div className={styles.cells_grid}>
              <p className={cn("caption-bold", styles.info)}>
                {" "}
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M2.88539 15.1513L3.61329 14.9705L2.88539 15.1513ZM2.88539 8.84875L2.1575 8.668H2.1575L2.88539 8.84875ZM21.1146 8.84876L21.8425 8.66801L21.1146 8.84876ZM21.1146 15.1512L21.8425 15.332V15.332L21.1146 15.1512ZM15.1156 20.659L14.9533 19.9267H14.9533L15.1156 20.659ZM8.88443 20.659L9.04668 19.9267L8.88443 20.659ZM8.88443 3.34105L8.72218 2.60881V2.60881L8.88443 3.34105ZM15.1156 3.34105L14.9533 4.07329L14.9533 4.07329L15.1156 3.34105ZM8.43055 20.5584L8.2683 21.2906L8.43055 20.5584ZM15.5694 20.5584L15.7317 21.2906H15.7317L15.5694 20.5584ZM15.5694 3.44162L15.7317 2.70938V2.70938L15.5694 3.44162ZM8.43056 3.44162L8.59281 4.17386H8.59281L8.43056 3.44162ZM4.73825 5.89015C4.40121 5.64936 3.93279 5.72738 3.692 6.06441C3.45121 6.40144 3.52923 6.86986 3.86626 7.11066L4.73825 5.89015ZM10.0825 10.63L9.64648 11.2403H9.64648L10.0825 10.63ZM13.9175 10.63L14.3535 11.2403L13.9175 10.63ZM20.1337 7.11066C20.4708 6.86986 20.5488 6.40144 20.308 6.06441C20.0672 5.72738 19.5988 5.64936 19.2618 5.89015L20.1337 7.11066ZM8.59281 4.17386L9.04668 4.07329L8.72218 2.60881L8.2683 2.70938L8.59281 4.17386ZM14.9533 4.07329L15.4072 4.17386L15.7317 2.70938L15.2778 2.60881L14.9533 4.07329ZM15.4072 19.8261L14.9533 19.9267L15.2778 21.3912L15.7317 21.2906L15.4072 19.8261ZM9.04668 19.9267L8.59281 19.8261L8.2683 21.2906L8.72218 21.3912L9.04668 19.9267ZM3.61329 14.9705C3.1289 13.0198 3.1289 10.9802 3.61329 9.02949L2.1575 8.668C1.61417 10.8561 1.61417 13.1439 2.1575 15.332L3.61329 14.9705ZM20.3867 9.0295C20.8711 10.9802 20.8711 13.0198 20.3867 14.9705L21.8425 15.332C22.3858 13.1439 22.3858 10.8561 21.8425 8.66801L20.3867 9.0295ZM14.9533 19.9267C13.008 20.3578 10.992 20.3578 9.04668 19.9267L8.72218 21.3912C10.8812 21.8696 13.1188 21.8696 15.2778 21.3912L14.9533 19.9267ZM9.04668 4.07329C10.992 3.64224 13.008 3.64224 14.9533 4.07329L15.2778 2.60881C13.1188 2.1304 10.8812 2.1304 8.72218 2.60881L9.04668 4.07329ZM8.59281 19.8261C6.14627 19.284 4.21736 17.4032 3.61329 14.9705L2.1575 15.332C2.89874 18.3171 5.26576 20.6253 8.2683 21.2906L8.59281 19.8261ZM15.7317 21.2906C18.7342 20.6253 21.1013 18.3171 21.8425 15.332L20.3867 14.9705C19.7826 17.4032 17.8537 19.284 15.4072 19.8261L15.7317 21.2906ZM15.4072 4.17386C17.8537 4.71598 19.7826 6.5968 20.3867 9.0295L21.8425 8.66801C21.1013 5.68288 18.7342 3.3747 15.7317 2.70938L15.4072 4.17386ZM8.2683 2.70938C5.26576 3.3747 2.89874 5.68288 2.1575 8.668L3.61329 9.02949C4.21736 6.59679 6.14627 4.71598 8.59281 4.17386L8.2683 2.70938ZM3.86626 7.11066L9.64648 11.2403L10.5185 10.0198L4.73825 5.89015L3.86626 7.11066ZM14.3535 11.2403L20.1337 7.11066L19.2618 5.89015L13.4815 10.0198L14.3535 11.2403ZM9.64648 11.2403C11.0543 12.2461 12.9456 12.2461 14.3535 11.2403L13.4815 10.0198C12.5953 10.653 11.4047 10.653 10.5185 10.0198L9.64648 11.2403Z'
                    fill='#777E90'
                  />
                </svg>
                {email}
              </p>

              <p className={cn("caption-bold", styles.info)}>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M15.1653 20.8835L15.0352 21.6221L15.1653 20.8835ZM17.8347 20.8835L17.7045 20.1449L17.8347 20.8835ZM20.8694 18.1565L20.1535 17.933V17.933L20.8694 18.1565ZM21 17.3034H20.25H21ZM12 17.3034H11.25H12ZM12.1306 18.1565L11.4147 18.3801L11.4147 18.3801L12.1306 18.1565ZM18.4589 15V15.75H18.4589L18.4589 15ZM20.786 18.4236L21.5019 18.6471V18.6471L20.786 18.4236ZM12.214 18.4236L12.9299 18.2L12.9299 18.2L12.214 18.4236ZM14.5411 15L14.5411 15.75H14.5411V15ZM3.1165 6.16532L2.37788 6.03516L3.1165 6.16532ZM5.84345 11.8694L6.06699 11.1535H6.06699L5.84345 11.8694ZM6.69661 12L6.69661 11.25L6.69661 12ZM6.69661 3L6.69661 2.25L6.69661 3ZM5.84345 3.13063L5.61991 2.41472L5.61991 2.41472L5.84345 3.13063ZM9 9.45894H8.25V9.45894L9 9.45894ZM5.57641 11.786L5.35287 12.5019H5.35287L5.57641 11.786ZM5.57641 3.21402L5.79995 3.92993L5.79996 3.92993L5.57641 3.21402ZM9 5.54106L8.25 5.54106V5.54106L9 5.54106ZM11.4147 18.3801L11.4981 18.6471L12.9299 18.2L12.8465 17.933L11.4147 18.3801ZM21.5019 18.6471L21.5853 18.3801L20.1535 17.933L20.0701 18.2001L21.5019 18.6471ZM15.0352 21.6221C16.0028 21.7926 16.9972 21.7926 17.9648 21.6221L17.7045 20.1449C16.9091 20.285 16.0909 20.285 15.2955 20.1449L15.0352 21.6221ZM21.5853 18.3801C21.6944 18.0307 21.75 17.6683 21.75 17.3034H20.25C20.25 17.5155 20.2177 17.7272 20.1535 17.933L21.5853 18.3801ZM11.25 17.3034C11.25 17.6683 11.3056 18.0307 11.4147 18.3801L12.8465 17.933C12.7823 17.7272 12.75 17.5155 12.75 17.3034H11.25ZM21.75 17.3034C21.75 15.5494 20.2055 14.25 18.4589 14.25L18.4589 15.75C19.5191 15.75 20.25 16.5131 20.25 17.3034H21.75ZM20.0701 18.2001C19.7696 19.1624 18.8764 19.9384 17.7045 20.1449L17.9648 21.6221C19.6268 21.3293 21.0162 20.2027 21.5019 18.6471L20.0701 18.2001ZM11.4981 18.6471C11.9838 20.2027 13.3732 21.3293 15.0352 21.6221L15.2955 20.1449C14.1236 19.9384 13.2304 19.1624 12.9299 18.2L11.4981 18.6471ZM12.75 17.3034C12.75 16.5131 13.4809 15.75 14.5411 15.75L14.5411 14.25C12.7945 14.25 11.25 15.5494 11.25 17.3034H12.75ZM18.4589 14.25H14.5411V15.75H18.4589V14.25ZM5.61991 2.41472L5.35286 2.49811L5.79996 3.92993L6.067 3.84654L5.61991 2.41472ZM5.35287 12.5019L5.61991 12.5853L6.06699 11.1535L5.79995 11.0701L5.35287 12.5019ZM2.37788 6.03516C2.20737 7.00281 2.20737 7.99719 2.37788 8.96484L3.85512 8.70453C3.71496 7.9091 3.71496 7.0909 3.85512 6.29547L2.37788 6.03516ZM5.61991 12.5853C5.96926 12.6944 6.3317 12.75 6.69661 12.75L6.69661 11.25C6.48455 11.25 6.27279 11.2177 6.06699 11.1535L5.61991 12.5853ZM6.69661 2.25C6.33171 2.25 5.96926 2.30564 5.61991 2.41472L6.06699 3.84654C6.27279 3.78228 6.48455 3.75 6.69661 3.75L6.69661 2.25ZM6.69661 12.75C8.45055 12.75 9.75001 11.2055 9.75 9.45894L8.25 9.45894C8.25 10.5191 7.48693 11.25 6.69661 11.25L6.69661 12.75ZM5.79995 11.0701C4.8376 10.7696 4.06162 9.87638 3.85512 8.70453L2.37788 8.96484C2.67074 10.6268 3.79728 12.0162 5.35287 12.5019L5.79995 11.0701ZM5.35287 2.49811C3.79729 2.98383 2.67074 4.37321 2.37788 6.03516L3.85512 6.29547C4.06162 5.12362 4.8376 4.23042 5.79995 3.92993L5.35287 2.49811ZM6.69661 3.75C7.48693 3.75 8.25001 4.48089 8.25 5.54106L9.75 5.54107C9.75001 3.79446 8.45055 2.25 6.69661 2.25L6.69661 3.75ZM9.75 9.45894L9.75 5.54106L8.25 5.54106L8.25 9.45894H9.75ZM2.37905 8.97132C3.57021 15.4 8.59997 20.4298 15.0287 21.6209L15.302 20.146C9.48393 19.068 4.93195 14.5161 3.85395 8.69804L2.37905 8.97132Z'
                    fill='#777E90'
                  />
                </svg>
                +1 {phone}
              </p>
              <p className={cn("caption-bold", styles.info)}>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M5 19.1115C5 16.6984 6.69732 14.643 9.00404 14.2627L9.21182 14.2284C11.0589 13.9239 12.9411 13.9239 14.7882 14.2284L14.996 14.2627C17.3027 14.643 19 16.6984 19 19.1115C19 20.1545 18.1815 21 17.1719 21H6.82813C5.81848 21 5 20.1545 5 19.1115Z'
                    stroke='#777E90'
                    stroke-width='1.5'
                  />
                  <path
                    d='M16.0834 6.9375C16.0834 9.11212 14.2552 10.875 12 10.875C9.74486 10.875 7.91669 9.11212 7.91669 6.9375C7.91669 4.76288 9.74486 3 12 3C14.2552 3 16.0834 4.76288 16.0834 6.9375Z'
                    stroke='#777E90'
                    stroke-width='1.5'
                  />
                </svg>
                {gender}
              </p>
              <p className={cn("caption-bold", styles.info)}>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M3.83327 15.2485L4.56432 15.0809L3.83327 15.2485ZM3.83327 9.35323L4.56432 9.52078L3.83327 9.35323ZM20.1667 9.35323L19.4357 9.52079L20.1667 9.35323ZM20.1667 15.2485L19.4357 15.0809L20.1667 15.2485ZM14.8801 20.6589L15.0552 21.3882L14.8801 20.6589ZM9.11986 20.6589L9.29493 19.9296L9.11986 20.6589ZM9.11985 3.94279L9.29493 4.67207L9.11985 3.94279ZM14.8801 3.94279L15.0552 3.21351L14.8801 3.94279ZM8.82008 3C8.82008 2.58579 8.48429 2.25 8.07008 2.25C7.65587 2.25 7.32008 2.58579 7.32008 3H8.82008ZM7.32008 5.51375C7.32008 5.92796 7.65587 6.26375 8.07008 6.26375C8.48429 6.26375 8.82008 5.92796 8.82008 5.51375H7.32008ZM16.6799 3C16.6799 2.58579 16.3441 2.25 15.9299 2.25C15.5157 2.25 15.1799 2.58579 15.1799 3H16.6799ZM15.1799 5.51375C15.1799 5.92796 15.5157 6.26375 15.9299 6.26375C16.3441 6.26375 16.6799 5.92796 16.6799 5.51375H15.1799ZM4.56432 15.0809C4.14523 13.2524 4.14523 11.3493 4.56432 9.52078L3.10223 9.18568C2.63259 11.2347 2.63259 13.367 3.10223 15.416L4.56432 15.0809ZM19.4357 9.52079C19.8548 11.3493 19.8548 13.2524 19.4357 15.0809L20.8978 15.416C21.3674 13.367 21.3674 11.2347 20.8978 9.18568L19.4357 9.52079ZM14.7051 19.9296C12.9258 20.3568 11.0742 20.3568 9.29493 19.9296L8.94478 21.3882C10.9542 21.8706 13.0458 21.8706 15.0552 21.3882L14.7051 19.9296ZM9.29493 4.67207C11.0742 4.24493 12.9258 4.24493 14.7051 4.67207L15.0552 3.21351C13.0458 2.73111 10.9542 2.73111 8.94478 3.21351L9.29493 4.67207ZM9.29493 19.9296C6.95607 19.3682 5.11769 17.4953 4.56432 15.0809L3.10223 15.416C3.77946 18.3708 6.03739 20.6902 8.94478 21.3882L9.29493 19.9296ZM15.0552 21.3882C17.9626 20.6902 20.2205 18.3708 20.8978 15.416L19.4357 15.0809C18.8823 17.4953 17.0439 19.3682 14.7051 19.9296L15.0552 21.3882ZM14.7051 4.67207C17.0439 5.23355 18.8823 7.10642 19.4357 9.52079L20.8978 9.18568C20.2205 6.23089 17.9626 3.91147 15.0552 3.21351L14.7051 4.67207ZM8.94478 3.21351C6.03739 3.91147 3.77946 6.23089 3.10223 9.18568L4.56432 9.52078C5.11769 7.10641 6.95607 5.23355 9.29493 4.67207L8.94478 3.21351ZM4.14016 9.02886H19.8598V7.52886H4.14016V9.02886ZM7.32008 3V5.51375H8.82008V3H7.32008ZM15.1799 3V5.51375H16.6799V3H15.1799Z'
                    fill='#777E90'
                  />
                  <path
                    d='M13.442 13.924C13.847 13.636 14.099 13.204 14.099 12.619C14.099 11.404 13.163 10.774 12.056 10.774C10.949 10.774 10.004 11.404 10.004 12.619C10.004 13.204 10.265 13.636 10.661 13.924C10.112 14.257 9.797 14.806 9.797 15.445C9.797 16.606 10.652 17.326 12.056 17.326C13.451 17.326 14.315 16.606 14.315 15.445C14.315 14.806 14 14.257 13.442 13.924ZM12.056 11.944C12.524 11.944 12.866 12.214 12.866 12.682C12.866 13.141 12.524 13.429 12.056 13.429C11.588 13.429 11.246 13.141 11.246 12.682C11.246 12.214 11.588 11.944 12.056 11.944ZM12.056 16.156C11.462 16.156 11.03 15.85 11.03 15.283C11.03 14.725 11.462 14.419 12.056 14.419C12.65 14.419 13.082 14.725 13.082 15.283C13.082 15.85 12.65 16.156 12.056 16.156Z'
                    fill='#777E90'
                  />
                </svg>
                {dateOfBirth}
              </p>
            </div>

            <p className={cn("caption-2", styles.date_text)}>
              Member since <Date dateString={registerDate} />
            </p>
          </div>

          <div className={cn("container", styles.container)}>
            <div className={styles.post_grid}>
              {posts.map((post) => (
                <Post {...post} id={post.id} tags={post.tags} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
