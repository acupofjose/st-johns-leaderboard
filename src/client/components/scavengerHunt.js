import React from "react"
import Hangman from "./hangman"

const ScavengerHunt = () => {
  return (
    <div className="scavenger-hunt">
      <h2>Scavenger Hunt</h2>
      <p>A total of 20 clues will be given over the next 6 weeks.</p>
      <p>
        Each clue can be won by <em>3 people</em>.
      </p>
      <p>
        <em>Pay attention to how the clues are worded and written.</em>
      </p>
      <p>
        Each clue's answer can be submitted as a photo to the hashtag
        #stjohnsummertimeshowdown #clue-[number] (i.e. #clue1) on Instagram or
        emailed to&nbsp;
        <a href="mailto:showdown@light-heart.org">showdown@light-heart.org</a>
      </p>
      <p>
        Each clue should be read as, "Take a picture of you and ..." unless
        otherwise specified.
      </p>
      <p>
        Upon a correct answer to a clue, the next clue will be emailed to all
        participants. The clue will
        <em>&nbsp;remain open until 3 answers have been received</em>.
      </p>
      <p>
        An additional 2 pts will be awarded for having the team token in the
        picture.
      </p>
      <p>
        An additional 5 pts will be awarded for having the team mascot in the
        picture.
      </p>

      <p>
        5 minutes must pass after the submission of a teammate before a member
        of the same team can be awarded for an answer. (i.e. if Sally and Tom
        are on the same team, they find an answer together and Sally submits
        first. Tom must wait 5 minutes before his submission will be counted. If
        another team submits in that 5 minutes, they will receive the points for
        that place.)
      </p>
      <p>
        Clues will be given a bounty based on their difficulty and formated as
        [##, ##, ##] representing values for 1st, 2nd, and 3rd place.
      </p>
      <p>A maximum of 5 clues will be given per week.</p>
      <h3>Clues</h3>
      <ol>
        <li>
          <p className="strikethrough">
            Now seen as monumental,
            <br />I was first a pest.
            <br />
            Lifted by hands,
            <br />
            that call me blessed.
            <br />
            <small>Bounty: [20, 10, 8]</small>
            <br />
          </p>
          <p className="claimed">
            <small>
              Claimed by: Carmen (+token, +mascot), Makenzie (+token, +mascot),
              and Sam
            </small>
          </p>
        </li>
        <li>
          <p className="strikethrough">
            The lines move quick
            <br />
            but you need to pick
            <br />
            save the cows
            <br />
            go in and browse. <br />
            <br />
            Go any day
            <br />
            except for one.
            <br />
            <br />
            I am Georgia, in a cup.
            <br />
            <small>Bounty: [20, 10, 8]</small>
          </p>
          <p className="claimed">
            <small>
              Claimed by: Joan (+token, +mascot), Annabelle (+token, +mascot),
              and Nathan (+token, +mascot)
            </small>
          </p>
        </li>
        <li>
          <p className="strikethrough">
            <em>
              This clue must be submitted through email or DM on Instagram. DO
              NOT POST A PICTURE OF YOUR ANSWER.
            </em>
          </p>
          <hr />
          <p className="strikethrough">
            Ciphers are used everyday
            <br />
            passing messages in secret
            <br />
            hidden away.
            <br />
            <br />
            The answer you seek
            <br />
            requires a key,
            <br />
            The substitution of bib le.
            <br />
            <br /> HOFN 6:9 NBIRA <br />
            "Fumbnjgne," gt sbys, crom tfa cgrst iooj, cgne tfa lfbptar bne
            varsa usgnd tfa kobvas bne cgsfas.
            <br />
            <br />
            <small>Bounty: [40, 30, 15]</small>
          </p>
          <p className="claimed">
            <small>Claimed by: MacKenzie, Claire, and Annabelle</small>
          </p>
        </li>
        <li>
          <p className="strikethrough">
            <em>
              This clue requires at least 3 participants to count as a valid
              submission. Each participant will receive the bounty listed below,
              regardless of team.
              <br />
              An extra 5 points per participant if all are on the same team.
              <br />
              <br />
              Plan accordingly.
            </em>
          </p>
          <hr />
          <p className="strikethrough">
            They call me a "bird"
            <br />
            but I no longer fly
            <br />
            I'm made of metal
            <br />
            and many pass me by.
            <br />
            <br />
            Through rain or shine,
            <br />
            sleet or hail
            <br />I won't move an inch or nail.
            <br />
            <br />
            You'll find me off main and neal,
            <br />
            bring a friend and share a meal.
            <br />
            <br />
            <small>Bounty: [15, 10, 8] (per person)</small>
          </p>
          <p className="claimed">
            <small>
              Claimed By: Joan, Mackenzie, Natalie, Nathan, and Carmen
            </small>
          </p>
        </li>
        <li>
          <p className="strikethrough">
            If John the baptist was still around
            <br />
            That is the place he would be found
            <br />
            Untamed and Unbound
            <br />
            I'm a local place buzzing with sound.
            <br />
            <br />
            <br />
            Take a picture here
            <br />
            <br />
            <small>Bounty: [15, 10, 8]</small>
          </p>
          <p className="claimed">
            <small>Claimed by: Annabelle, Lucas, and Mackenzie</small>
          </p>
        </li>
        <li>
          <p>
            Like mother and babe
            <br />
            so I am to bees
            <br />
            I make honey
            <br />
            but am found on trees.
            <br />
            <br />
            <small>
              Bounty: 15 pts, brought on Wednesday, only one answer will be
              accepted.
            </small>
          </p>
          <p className="claimed">
            <small>Claimed by:</small>
          </p>
        </li>
        <li>
          <Hangman />
        </li>
      </ol>
    </div>
  )
}

export default ScavengerHunt
