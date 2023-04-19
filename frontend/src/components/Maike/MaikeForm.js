import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createList } from "../../store/lists";
import "./Maike.css";
// import jwtFetch from "../../store/jwt";
import MaikeModal from "./MaikeModal";

const MaikeForm = () => {
  const [clothingValue, setClothingValue] = useState("");
  const [hairColorValue, setHairColorValue] = useState("");
  const [genderValue, setGenderValue] = useState("");
  const [backgroundValue, setBackgroundValue] = useState("");
  const [artStyleValue, setArtStyleValue] = useState("");
  const [webStyleValue, setWebStyleValue] = useState("");
  const dispatch = useDispatch();
  const [createdListId, setCreatedListId] = useState("");
  console.log(createdListId);
  const [loading,setLoading] = useState(false)
  const [imageData,setImageData] = useState('')
  console.log(loading)
  const handleChange = (setter) => (event) => {
    setter(event.target.value);
  };

  
  // const handleMaikeClick = async (e)=>{
  //   e.preventDefault()
  //   if (!createdListId) return 
  //   setLoading(()=>true)
  //   const res = await jwtFetch(`/api/lists/image/${createdListId}`)
    
  //   if (res.ok){
  //     const data = await res.json()
  //     setImageData(()=>data.images)
  //     console.log(imageData)
  //     setLoading(()=>false)
  //   }
  // }
  
  const handleSaveList = () => {
    const listData = {
      clothingAccessory: clothingValue,
      hairColor: hairColorValue,
      gender: genderValue,
      background: backgroundValue,
      artStyle: artStyleValue,
      websiteStyle: webStyleValue,
    };
    dispatch(createList(listData)).then((list) => {
      setCreatedListId(() => list._id);
    });
  };
  
  let saveButton;
  
  let maikeButton;
  if (createdListId){
    saveButton = <div id = 'hideSaveButton'>Saved !</div>
    maikeButton = <MaikeModal loading = {loading}
    imageData = {imageData}
    createdListId = {createdListId}
    setLoading = {setLoading}
    setImageData = {setImageData}
    setCreatedListId = {setCreatedListId}
    setClothingValue = {setClothingValue}
    setHairColorValue = {setHairColorValue}
    setGenderValue = {setGenderValue}
    setBackgroundValue = {setBackgroundValue}
    setArtStyleValue = {setArtStyleValue}
    setWebStyleValue = {setWebStyleValue}
    />
  }else{
    saveButton = <button className="maike-avatar" onClick={handleSaveList}>
    Save List
  </button>
    maikeButton = <button id = 'hideMaikeButton'> MAIke</button>
  }
  if (clothingValue === "" || hairColorValue === "" || genderValue === "" 
  || backgroundValue === "" || artStyleValue === "" || webStyleValue === "" ) {
    saveButton = <div id = 'hideMaikeButton'>Save List</div>
  } 

  const HairColor = {
    Red: "Red",
    Silver: 'Silver',
    White: "White",
    Pink: "Pink",
    Blue: "Blue",
    Black: "Black",
    Brown: "Brown",
    Green: "Green",
    Blonde: 'Blonde',
    Grey: 'Grey'
  };
  
  const ClothingAcessory = {
    "T-shirt": "T-shirt",
    Tuxedo: "Tuxedo",
    Hoodie: "Hoodie",
    'Business-Suit':'Business-Suit',
    Blazer: 'Blazer',
    Beanie: 'Beanie',
    Scarf: 'Scarf',
    Robe: 'Mage Robe',
    "Maid-Uniform": "Maid-Uniform",
    "Sailor-Uniform": "Sailor-Uniform",
    
  };
  
  const Gender = {
    "Male-Presenting": "boy",
    "Female-Presenting": "girl",
  };
  
  const Background = {
    Forest: "Forest",
    Night: 'Night',
    City: "City",
    Arcade: "Arcade",
    Mall: "Mall",
    Park: "Park",
    Mountain: "Mountain",
    Beach: "Beach",
    Ocean: "Ocean",
    Desert: 'Desert',
    Prairie: 'Prairie',
    Lakes: 'Lakes',
    Volcano: 'Volcano'

  };

  const ArtStyle = {
    Anime: "Anime Key Visuals",
    Game: "Game Key Visuals",
    Digital: "Digital Art",
    "Visual Novel": "Visual Novel Key Visuals",
    "Kids Drawing": "Kids Drawing",
    Baroque: "Baroque Art",
  };

  const WebStyle = {
    Pixiv: "Pixiv",
    Twitter: "Twitter",
  };

  return (
    <div className="maike-form-box">
      <h1 id="maike-title">What do you want?</h1>

      <div className="maike-form-divider">
        <div className="maike-form-content">
          <h1 id="maike-appearance">APPEARANCE</h1>
          <div className="select-container">
            <select
              value={clothingValue}
              onChange={handleChange(setClothingValue)}
            >
              <option value="" disabled selected>
                Clothing/Acessory ▼
              </option>
              {Object.entries(ClothingAcessory).map(([cloth, value]) => (
                <option key={cloth} value={value}>
                  {cloth}
                </option>
              ))}
            </select>
          </div>
          <div className="select-container">
            <select
              value={hairColorValue}
              onChange={handleChange(setHairColorValue)}
            >
              <option value="" disabled selected>
                Hair-Color ▼
              </option>
              {Object.entries(HairColor).map(([color, value]) => (
                <option key={color} value={value}>
                  {color}
                </option>
              ))}
            </select>
          </div>
          <div className="select-container">
            <select value={genderValue} onChange={handleChange(setGenderValue)}>
              <option value="" disabled selected>
                Gender ▼
              </option>
              {Object.entries(Gender).map(([gender, value]) => (
                <option key={gender} value={value}>
                  {gender}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="maike-form-center-line"></div>

        <div className="maike-form-content">
          <h1 id="maike-style">STYLE</h1>
          <div className="select-container">
            <select
              value={backgroundValue}
              onChange={handleChange(setBackgroundValue)}
            >
              <option value="" disabled selected>
                Background ▼
              </option>
              {Object.entries(Background).map(([background, value]) => (
                <option key={background} value={value}>
                  {background}
                </option>
              ))}
            </select>
          </div>
          <div className="select-container">
            <select
              value={artStyleValue}
              onChange={handleChange(setArtStyleValue)}
            >
              <option value="" disabled selected>
                Art-Style ▼
              </option>
              {Object.entries(ArtStyle).map(([artstyle, value]) => (
                <option key={artstyle} value={value}>
                  {artstyle}
                </option>
              ))}
            </select>
          </div>
          <div className="select-container">
            <select
              value={webStyleValue}
              onChange={handleChange(setWebStyleValue)}
            >
              <option value="" disabled selected>
                Web-Style ▼
              </option>
              {Object.entries(WebStyle).map(([webstyle, value]) => (
                <option key={webstyle} value={value}>
                  {webstyle}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="list-maike-buttons">
        {saveButton}
        {/* <button onClick={handleMaikeClick} className="maike-avatar">M
        <span className="ai-spans">AI</span>ke</button> */}
        {maikeButton}
      </div>
    </div>
  );
};

export default MaikeForm;
