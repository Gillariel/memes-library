import * as React from 'react';
import axios from 'axios'
import style from './style';
import Card from '../../components/card';
import * as firebase from "firebase/app";
import "firebase/auth";
import * as firebaseui from 'firebaseui'

const ids = {
  AUGUSTIN: "s!ApI5-hnIEtT8iJAIefAfzsosw8bGrA",
  ISMA: "s!ApI5-hnIEtT8iJAHefAfzsosw8bGrA",
  KOSTA: "s!ApI5-hnIEtT8iJAGefAfzsosw8bGrA",
  NATHAN: "s!ApI5-hnIEtT8rFMOIi6ym--HE8OP",
  MATHILDE: "s!ApI5-hnIEtT8iJQTefAfzsosw8bGrA"
}

const MemeList = ({ name }) => {
  const [memes, setMemes] = React.useState([]);
  const getMemes = () => {
    var drive = "shares/";
    switch (name) {
      case 'isma':
        drive = drive + ids.ISMA + "/driveItem?$expand=children"
        break;
      case 'kosta':
        drive = drive + ids.KOSTA + "/driveItem?$expand=children"
        break;
      case 'gus':
        drive = drive + ids.AUGUSTIN + "/driveItem?$expand=children"
        break;
      case 'nate':
        drive = drive + ids.NATHAN + "/driveItem?$expand=children"
        break;
      case 'shai':
        drive = drive + ids.MATHILDE + "/driveItem?$expand=children"
        break;
    }
    axios.get(`https://api.onedrive.com/v1.0/${drive}`)
      .then(res => {
        let newMemes = [...memes];
        if (res.data && res.data.children && res.data.children.length > 0) {
          res.data.children.forEach(fileOrFolder => {
            //it is a file
            if ("@content.downloadUrl" in fileOrFolder) {
              newMemes.push({
                desc: fileOrFolder.name.split('.').slice(0, -1).join('.'),
                data: fileOrFolder["@content.downloadUrl"]
              })
            }
          });
          if (newMemes.length > 0)
            setMemes(newMemes);
          else
            setMemes([{ desc: "No memes yet :/", data: "https://sitechecker.pro/wp-content/uploads/2017/12/404.png" }])
        } else {
          setMemes([{ desc: "No memes yet :/", data: "https://sitechecker.pro/wp-content/uploads/2017/12/404.png" }])
        }
      }).catch(err => {
        setMemes([{ desc: "No memes yet :/", data: "https://sitechecker.pro/wp-content/uploads/2017/12/404.png" }])
      });
  }

  const upload = () => {
    firebase.initializeApp();
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', {
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
    });
  }

  React.useEffect(async () => {
    getMemes();
    localStorage.setItem("needRefresh", "0")
  }, [])

  return (
    <div class={style.home}>
      <div>

        <button onClick={() => upload()}>Upload</button>
      </div>
      <h1>{name}'s memes</h1>
      <div class="masonry bordered">
        {memes.map(meme => {
          return (
            <div class="brick">
              <Card source={meme.data} title={meme.desc} />
            </div>)
        })}
      </div>
    </div>
  )
};

export default MemeList;
