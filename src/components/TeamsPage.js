import React, { useState, useRef, useEffect } from 'react';
import './TeamsPage.css';
import TeamCard from './TeamCard';

function TeamsPage() {
  const [activeTeam, setActiveTeam] = useState('organising');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [needsLeadScroll, setNeedsLeadScroll] = useState(false);
  const scrollRefs = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      
      const minWidthForAllCards = 950;
      setNeedsLeadScroll(window.innerWidth < minWidthForAllCards);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const setupInfiniteScroll = (scrollElement, index) => {
      if (!scrollElement) return;

      const row = scrollElement.querySelector('.team-cards-row, .team-cards-row-head');
      if (!row) return;
      
      if (index === 0) {
        const containerWidth = scrollElement.clientWidth;
        const contentWidth = row.scrollWidth;
        if (contentWidth <= containerWidth) {
          return;
        }
      }
      
      setTimeout(() => {
        scrollElement.scrollLeft = 0;
      }, 100);
      
      let animationId;
      let isPaused = false;
      const scrollSpeed = 0.8;
      
      const autoScroll = () => {
        if (!isPaused) {
          const currentScroll = scrollElement.scrollLeft;
          const singleSetWidth = row.scrollWidth / 3;
          
          if (currentScroll >= singleSetWidth * 2 - 50) {
            scrollElement.scrollLeft = singleSetWidth + (currentScroll - (singleSetWidth * 2 - 50));
          } else {
            scrollElement.scrollLeft = currentScroll + scrollSpeed;
          }
        }
        
        animationId = requestAnimationFrame(autoScroll);
      };
      
      setTimeout(() => {
        animationId = requestAnimationFrame(autoScroll);
      }, 200);
      
      const handleMouseEnter = () => {
        isPaused = true;
      };
      const handleMouseLeave = () => {
        isPaused = false;
      };
      
      scrollElement.addEventListener('mouseenter', handleMouseEnter);
      scrollElement.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
        scrollElement.removeEventListener('mouseenter', handleMouseEnter);
        scrollElement.removeEventListener('mouseleave', handleMouseLeave);
      };
    };

    const cleanups = scrollRefs.current.map((ref, index) => setupInfiniteScroll(ref, index));
    return () => cleanups.forEach(cleanup => cleanup && cleanup());
  }, [activeTeam, isMobile, needsLeadScroll]);

  const LeadOrganisers = [
    { name: 'Vasu Bhatia', post: 'President', image: '/PICS/Teams/vasu%20bhatia.jpg', linkedin: 'https://www.linkedin.com/in/vasu-bhatia/' },
    { name: 'Ashmit', post: 'Vice President', image: '/PICS/Teams/Ashmit2.jpg', linkedin: 'https://www.linkedin.com/in/ashmit-sharma-b75450322/' },
    { name: 'Moksha', post: 'General Secretary', image: '/PICS/Teams/moksh.jpeg', linkedin: 'https://www.linkedin.com/in/moksha-sharma-a232bb21b/' },
    { name: 'Parth Singh', post: 'Tech Master', image: '/PICS/Teams/Parth.jpg', linkedin: 'https://www.linkedin.com/in/parth-singh-b30517352?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { name: 'Adya', post: 'Chief\nStrategist', image: '/PICS/Teams/adya.jpeg', linkedin: null },

  ];

  const organisingHeads = [
    { name: 'Akshat', post: 'Sponsorship\nHead', image: '/PICS/Teams/Akshat.webp', linkedin: null },
    { name: 'Abhinav', post: 'Sponsorship\nSub-Head', image: '/PICS/Teams/Abhinav.jpg', linkedin: 'https://www.linkedin.com/in/abhinav-chauhan-854237397?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { name: 'Riya', post: 'PR Head', image: '/PICS/Teams/riya.jpg', linkedin: 'https://www.linkedin.com/in/riya-kabra-06060a326/' },
    { name: 'Sarthak', post: 'PR\nSub-Head', image: '/PICS/Teams/Sarthak.jpg', linkedin: 'https://www.linkedin.com/in/sarthak-sharma-62655737b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { name: 'Adil', post: 'Tech Head', image: '/PICS/Teams/adil.png', linkedin: 'https://www.linkedin.com/in/adilaquil' },
    { name: 'Arindam', post: 'Tech\nSub-Head', image: '/PICS/Teams/Arindam.jpg', linkedin: 'https://www.linkedin.com/in/arindam-jakhwal-bb596532b/' },
    { name: 'Laksh', post: 'Tech\nSub-Head', image: '/PICS/Teams/Laksh.jpg', linkedin: 'https://www.linkedin.com/in/laksh-dhingra-a81846342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
    { name: 'Alankrit', post: 'Operations\nHead', image: '/PICS/Teams/Alankrit.JPG', linkedin: 'https://www.linkedin.com/in/alankrit-jain-161b742a5/' },
    { name: 'Anika', post: 'Operations\nSub-Head', image: '/PICS/Teams/AnikaAgarwal.jpg', linkedin: 'https://www.linkedin.com/in/anika-agarwal-28088537a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { name: 'Sneha', post: 'Vigilance\nHead', image: '/PICS/Teams/sneha.jpg', linkedin: 'https://www.linkedin.com/in/sneha-jivnani-7241a6231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
    { name: 'Kshitij', post: 'Vigilance\nSub-Head', image: '/PICS/Teams/Kshitij.jpg', linkedin: 'https://www.linkedin.com/in/kshitij-dubey-479300382/' },
    { name: 'Anushka', post: 'Socialmedia\nHead', image: '/PICS/Teams/anushka.png', linkedin: null },
    { name: 'Gauranvi', post: 'Creative\nHead', image: '/PICS/Teams/gauranvi.webp', linkedin: 'https://www.linkedin.com/in/gauranvi-mehra-68619a322/' },
    { name: 'Abhimanyu', post: 'Creative\nSub-Head', image: '/PICS/Teams/Abhi.jpeg', linkedin: 'https://www.linkedin.com/in/abhimanyu-narang/' },
    { name: 'Vishesh', post: 'Multimedia\nHead', image: '/PICS/Teams/Vishesh.jpg', linkedin: 'https://www.linkedin.com/in/vishesh-gautam-823699228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
    { name: 'Prikshit', post: 'Multimedia\nSub-Head', image: '/PICS/Teams/prikshit.png', linkedin: 'https://linkedin.com/in/prikshit-sharma-1a2ba5322' },
    
  ];

  const organisingTeam = [
    { name: 'Harman', post: 'Sponsorship Team', image: '/PICS/Teams/harman.jpg', linkedin: null },
    { name: 'Sahil', post: 'Pr Team', image: '/PICS/Teams/sahil.jpg', linkedin: 'https://www.linkedin.com/in/sahil-goyal-a1a354375' },
    { name: 'Nirali', post: 'Pr Team', image: '/PICS/Teams/nirali.jpeg', linkedin: 'https://www.linkedin.com/in/nirali-goyal-931002376?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { name: 'Naina', post: 'Tech Team', image: '/PICS/Teams/Naina.jpg', linkedin: 'https://www.linkedin.com/in/naina-jain-421a9a369?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { name: 'Anmol', post: 'Tech Team', image: '/PICS/Teams/Anmol.jpg', linkedin: 'https://www.linkedin.com/in/anmol-goel-61973936a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { name: 'Dwij', post: 'Tech Team', image: '/PICS/Teams/Dwij.jpg', linkedin: 'https://www.linkedin.com/in/dwij-dalmia/' },
    { name: 'Prakhar', post: 'Operations Team', image: '/PICS/Teams/Prakhar.jpg', linkedin: 'https://www.linkedin.com/in/prakhar-tiwari-bb874a391?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { name: 'Vaasu', post: 'Operations Team', image: '/PICS/Teams/Vaasu.jpg', linkedin: 'https://www.linkedin.com/in/vaasudeepkohli' },
    { name: 'Mansi', post: 'Operations Team', image: '/PICS/Teams/mans.jpeg', linkedin: 'https://www.linkedin.com/in/mansi-verma-2569aa2bb' },
    { name: 'Anshika', post: 'Vigilance Team', image: '/PICS/Teams/anshika.jpg', linkedin: null },
    { name: 'Sakshi', post: 'Vigilance Team', image: '/PICS/Teams/Sakshi.png', linkedin: 'https://www.linkedin.com/in/sakshi-yadav-90032039a' },
    { name: 'Rashi', post: 'Vigilance Team', image: '/PICS/Teams/Rashi.jpg', linkedin: null },
    { name: 'Pragydeep', post: 'Vigilance Team', image: '/PICS/Teams/Pragydeep.jpeg', linkedin: 'https://www.linkedin.com/in/pragydeep-shrivastava-8b3a76240/' },
    { name: 'Akshat', post: 'Social Media Team', image: '/PICS/Teams/AkshatGarg.jpg', linkedin: null },
    { name: 'Ananya', post: 'Social Media Team', image: '/PICS/Teams/Ananyagoel.jpg', linkedin: 'https://www.linkedin.com/in/ananya-goel-610607345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { name: 'Khwahish', post: 'Hospitality Team', image: '/PICS/Teams/kwahish.jpg', linkedin: null },
    { name: 'Nandini', post: 'Hospitality Team', image: '/PICS/Teams/Nandini.jpg', linkedin: 'https://www.linkedin.com/in/nandini-khandelwal-khandelwal-a23319397?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { name: 'Riya', post: 'Hospitality Team', image: '/PICS/Teams/riya.png', linkedin: 'https://www.linkedin.com/in/kuuraskii/' },
    { name: 'Gouri', post: 'Hospitality Team', image: '/PICS/Teams/gouri.jpg', linkedin: 'https://www.linkedin.com/in/gouri-chauhan-b7b22b380/' },
    { name: 'Tanay', post: 'Hospitality Team', image: '/PICS/Teams/Tanay.jpg', linkedin: 'http://www.linkedin.com/in/tanay-prasad26' },
    { name: 'Saanvi', post: 'Hospitality Team', image: '/PICS/Teams/Saanvi.jpg', linkedin: 'www.linkedin.com/in/saanvi-biswas-085a98364' },
    { name: 'Rupesh', post: 'Creative Team', image: '/PICS/Teams/Rupesh.png', linkedin: 'https://www.linkedin.com/in/rupesh-yadav-911211369?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { name: 'Khushi', post: 'Creative Team', image: '/PICS/Teams/Khushi.jpg', linkedin: 'https://www.linkedin.com/in/khushi-sultania-360920392' },
    { name: 'Vaishnavi', post: 'Creative Team', image: '/PICS/Teams/vaishnavi.jpg', linkedin: 'https://www.linkedin.com/in/vaishnavi-agarwal-85a63937b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { name: 'Ekisha', post: 'Multimedia Team', image: '/PICS/Teams/Ekisha.PNG', linkedin: 'https://www.linkedin.com/in/ekisha-bisht-ba281a361?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },

  ]


  const judgingTeam = Array(14).fill(null).map((_, i) => ({
    name: 'Announcing Soon',
    post: 'Judge'
  }));

  return (
    <div className="teams-page">
      <div className="teams-content">
        <div className="team-division-header">
          <div className="team-gradient-bar">
            <div className="gradient-rect"></div>
            <div className="team-division-tabs">
              <div 
                className={`team-tab ${activeTeam === 'organising' ? 'active' : ''}`}
                onClick={() => setActiveTeam('organising')}
              >
                <div className="team-tab-text">Organising Team</div>
                <div className="team-tab-underline"></div>
              </div>
              <div 
                className={`team-tab ${activeTeam === 'judging' ? 'active' : ''}`}
                onClick={() => setActiveTeam('judging')}
              >
                <div className="team-tab-text">Judging Team</div>
                <div className="team-tab-underline"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="team-sections">
          {activeTeam === 'organising' ? (
            <div className="organising-team-sections">
              <div className="team-section">
                <h2 className="team-section-title-head">Lead Organisers</h2>
                <div className="team-scroll-container">
                  <div className="scroll-gradient-mask"></div>
                  <div className="team-scroll-content team-scroll-lead" ref={el => scrollRefs.current[0] = el}>
                    <div className="team-cards-row-head">
                      {LeadOrganisers.map((member, index) => (
                        <TeamCard key={`set1-${index}`} name={member.name} post={member.post} image={member.image} linkedin={member.linkedin} />
                      ))}
                      {needsLeadScroll && LeadOrganisers.map((member, index) => (
                        <TeamCard key={`set2-${index}`} name={member.name} post={member.post} image={member.image} linkedin={member.linkedin} />
                      ))}
                      {needsLeadScroll && LeadOrganisers.map((member, index) => (
                        <TeamCard key={`set3-${index}`} name={member.name} post={member.post} image={member.image} linkedin={member.linkedin} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="team-section">
                <h2 className="team-section-title">Organising Heads</h2>
                <div className="team-scroll-container">
                  <div className="scroll-gradient-mask"></div>
                  <div className="team-scroll-content" ref={el => scrollRefs.current[1] = el}>
                    <div className="team-cards-row">
                      {organisingHeads.map((member, index) => (
                        <TeamCard key={`set1-${index}`} name={member.name} post={member.post} image={member.image} linkedin={member.linkedin} />
                      ))}
                      {organisingHeads.map((member, index) => (
                        <TeamCard key={`set2-${index}`} name={member.name} post={member.post} image={member.image} linkedin={member.linkedin} />
                      ))}
                      {organisingHeads.map((member, index) => (
                        <TeamCard key={`set3-${index}`} name={member.name} post={member.post} image={member.image} linkedin={member.linkedin} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="team-section">
                <h2 className="team-section-title">Organising Team</h2>
                <div className="team-scroll-container">
                  <div className="scroll-gradient-mask"></div>
                  <div className="team-scroll-content" ref={el => scrollRefs.current[2] = el}>
                    <div className="team-cards-row">
                      {organisingTeam.map((member, index) => (
                        <TeamCard key={`set1-${index}`} name={member.name} post={member.post} image={member.image} linkedin={member.linkedin}/>
                      ))}
                      {organisingTeam.map((member, index) => (
                        <TeamCard key={`set2-${index}`} name={member.name} post={member.post} image={member.image} linkedin={member.linkedin}/>
                      ))}
                      {organisingTeam.map((member, index) => (
                        <TeamCard key={`set3-${index}`} name={member.name} post={member.post} image={member.image} linkedin={member.linkedin}/>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="team-section">
                <h2 className="team-section-title">Volunteers</h2>
                <div className="team-scroll-container">
                  <div className="scroll-gradient-mask"></div>
                  <div className="team-scroll-content" ref={el => scrollRefs.current[3] = el}>
                    <div className="team-cards-row">
                      {organisingTeam.map((member, index) => (
                        <TeamCard key={`set1-${index}`} name={'coming'} post={'soon'} />
                      ))}
                      {organisingTeam.map((member, index) => (
                        <TeamCard key={`set2-${index}`} name={'coming'} post={'soon'} />
                      ))}
                      {organisingTeam.map((member, index) => (
                        <TeamCard key={`set3-${index}`} name={'coming'} post={'soon'} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="judging-team-section">
              <div className="judging-team-grid">
                {judgingTeam.map((member, index) => (
                  <TeamCard key={index} name={member.name} post={member.post} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeamsPage;
