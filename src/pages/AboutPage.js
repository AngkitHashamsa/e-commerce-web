import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page  section-center'>
        <img src={aboutImg} alt='about' />
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nobis
            iure natus. Eaque sunt beatae repellat modi maiores, sequi rem
            ratione illo quibusdam mollitia repellendus atque asperiores
            doloremque culpa ex delectus esse ipsum placeat eveniet minus ab,
            odit veniam amet! Dolor, debitis adipisci vel ab ut non perferendis
            exercitationem aliquam?. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Hic nam atque excepturi tempore voluptates ipsum
            odio voluptas obcaecati deserunt reprehenderit earum odit dolorum
            numquam delectus perspiciatis, provident aliquam omnis! Molestias.
          </p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  padding: 2rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
    width: 6rem;
    height: 0.25rem;
    background-color: var(--clr-primary-4);
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
