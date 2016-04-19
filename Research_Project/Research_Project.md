#Savannah Research
##Adjusting Footstep Sounds in the Imported FPS Controller Script

Since Sean is working on scripting, I've focused a lot on audio and adjusting the aesthetics of the game that we're working on together.
I did some searching, and I found some audio that I wanted to use as my footsteps for the game. I brought the original into Audition, edited the steps down, and added them into the FPSController Script. Immediately, I knew something wasn't right. It sounded like it was playing the same sound over and over again as opposed to the two different sounds according to the different footstep noises.
So, I did some digging in the script.

 	 private void PlayFootStepAudio()
        {
            if (!m_CharacterController.isGrounded)
            {
                return;
            }
            // pick & play a random footstep sound from the array,
            // excluding sound at index 0
            int n = Random.Range(1, m_FootstepSounds.Length);
            m_AudioSource.clip = m_FootstepSounds[n];
            m_AudioSource.PlayOneShot(m_AudioSource.clip);
            // move picked sound to index 0 so it's not picked next time
            m_FootstepSounds[n] = m_FootstepSounds[0];
            m_FootstepSounds[0] = m_AudioSource.clip;
        }

Now, I don't know C#, but I can understand essentially what is being said in this script. 

*	"int n" is the number of sounds that the footsteps can play. It can be changed in the Unity application depending on how many sound you may want.
*	"Random.Range" is saying that a sound is going to be played randomly from the array
*	the rest is best if you have more than two sounds, but it's essentially saying that the sounds are going to be switched so that the sound that just played won't be played again

So all of this makes sense, and the code makes sense, so it should work, but it wasn't. So I did a lot of research trying to figure out how to change the code, and honestly, nothing helpful came up.

[unhelpful link 1](http://answers.unity3d.com/questions/11486/footstep-sounds-when-walking.html)
[unhelpful link 2](http://answers.unity3d.com/questions/373508/footsteps-script-for-running-and-walking.html)
[unhelpful link 3](http://answers.unity3d.com/questions/428831/how-to-add-footsteps-sound-effect-when-walking.html)

All of these were for making your own FPSController, so none of these helped me.
Sean couldn't even figure out why it wasn't working. Then, after playing around with it, he realized that my footsteps may have been too long.

So I took the original footstep sounds that came with the FPS package and the ones that I made, and I imported them both into Audition and compared the length of them.

The original footstep sounds were around .544, so under one second long. However, one of my footsteps was just barely over one second. So I moved them both down to the same length as the original footstep sounds, brought them into Unity, and found out that the audio itself was indeed too long. The code made sense, it was just human error.

[helpful link](http://answers.unity3d.com/questions/630003/footstep-sound-still-plays-when-standing-still.html)