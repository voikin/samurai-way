import {MyPost} from "./MyPost";
import {addedPostInStateAC,  ProfilePostType} from "../../../redux/reduser/profileReduсer";
import {connect} from "react-redux";
import {StateType} from "../../../redux/reduser/reduxStore";
import {Dispatch} from "redux";



const mapStateToProps= (state:StateType):MapStatePropsType => {

    return{
        posts:state.profileState.posts,
    }
}

const mapDispatchToProps = (dispatch:Dispatch):MapDispatchPropsType => {

    return{
        addedPostInState:(newPost:string)=>{
            dispatch(addedPostInStateAC(newPost))
        }
    }
}

type MapStatePropsType = {
    posts: Array<ProfilePostType>
}
type MapDispatchPropsType = {
    addedPostInState:(newPost:string)=>void
}
export type MyPostType = MapStatePropsType & MapDispatchPropsType


export default connect(mapStateToProps,mapDispatchToProps)(MyPost)




