import React from "react";
import { signIn } from '../../store/actions/authActions'
import DiscordStrategy from '../auth/discordstrategy'

const MyProfile = () => {
  return (
    <div>
      <h1>Welcome back username !</h1>
      <DiscordStrategy />
    </div>
  )
}

export default MyProfile;
