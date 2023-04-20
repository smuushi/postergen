import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserLists } from "../../store/lists";
import { getCurrentUser } from "../../store/session";
import ProfileBox from "./ProfileBox";
import SavedListCarousel from "./SavedListCarousel";
import { Collection } from "./Collection";
import { fetchUserImages } from "../../store/images";
import "./Profile.css";

function Profile() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);
  useEffect(() => {
    if (!currentUser?.images) {
      dispatch(getCurrentUser());

    }
    dispatch(fetchUserLists(currentUser?._id));
  }, []);

  

  return (
    <div className="profile-main-box">
      <div className="profile-left-box">
        <ProfileBox />
        <SavedListCarousel />
      </div>
      <div className="profile-right-box">
        <Collection currentUserId={currentUser?._id}/>
      </div>
    </div>
  );
}

export default Profile;
