import { GrStatusGood } from "react-icons/gr";
import style from './Listing.module.css'

export default function Listing(props) {
  return (
    <div className={style.listings}>
        <span><GrStatusGood /></span>
        <p>{props.list}</p>
    </div>
  )
}
