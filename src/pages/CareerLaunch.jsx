import React, { useEffect } from 'react';
import './CareerLaunch.css';

const CareerLaunch = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section className="career-launch-section">
            <div className="launch-ticker">
                <div className="ticker-content">
                    <span>🚀 New Batch Starting Soon for Full Stack & AI!</span>
                    <span>💎 Top Hiring Partners: Microsoft, Amazon, Google, Meta</span>
                    <span>📈 92% of Students Gained Practical Experience</span>
                    <span>🌟 8-Month Structured Career Pathway Integrated</span>
                    {/* Duplicate for seamless scroll */}
                    <span>🚀 New Batch Starting Soon for Full Stack & AI!</span>
                    <span>💎 Top Hiring Partners: Microsoft, Amazon, Google, Meta</span>
                </div>
            </div>

            <div className="launch-bg-decorators">
                <div className="grid-overlay"></div>
                <div className="glow-orb orb-1"></div>
                <div className="glow-orb orb-2"></div>
                <div className="glow-orb orb-3"></div>

                {/* Floating Particles */}
                <div className="tech-particles">
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className={`particle p-${i + 1}`}></div>
                    ))}
                </div>

                <div className="scan-line-container">
                    <div className="scan-line"></div>
                </div>
                <div className="moving-dashed-lines">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className={`dashed-line line-${i + 1}`}></div>
                    ))}
                </div>
            </div>

            <div className="container">
                <div className="section-header">
                    <div className="badge-modern">
                        <span className="dot"></span>
                        Industry Evolution 2.0
                    </div>
                    <h2>Career Launch Program – 8 Months</h2>
                    <p>Our structured program is designed to help students move from learning to real industry experience.</p>
                </div>

                <div className="phases-grid">
                    <div className="phase-card scroll-reveal">
                        <div className="card-shine"></div>
                        <div className="phase-indicator">PHASE 01</div>
                        <div className="live-status"><span className="status-dot"></span> ACTIVE</div>
                        <div className="phase-icon"><i className="fas fa-graduation-cap"></i></div>
                        <h3>Industry-Focused Training (4 Months)</h3>
                        <p>Students undergo intensive training designed around real industry tools, workflows, and project-based learning.</p>
                        <ul>
                            <li>Hands-on practical sessions</li>
                            <li>Industry-relevant tools and technologies</li>
                            <li>Real-world project development</li>
                            <li>Job-ready skill preparation</li>
                        </ul>
                        <div className="example-box">
                            <h4>Example learning outcomes</h4>
                            <div className="skill-chips">
                                <span className="chip">Python 3.x</span>
                                <span className="chip">SQL Ops</span>
                                <span className="chip">AI Models</span>
                                <span className="chip">Dashboards</span>
                            </div>
                            <p><strong>Example:</strong> Students build a real project such as a data analysis dashboard using Python and SQL.</p>
                        </div>
                    </div>

                    <div className="phase-card scroll-reveal">
                        <div className="card-shine"></div>
                        <div className="phase-indicator">PHASE 02</div>
                        <div className="live-status"><span className="status-dot green"></span> UPCOMING</div>
                        <div className="phase-icon"><i className="fas fa-laptop-code"></i></div>
                        <h3>Real-Time Internship (4 Months)</h3>
                        <p>After completing training, students participate in a structured internship designed to simulate real company environments.</p>
                        <ul>
                            <li>Work on live assignments</li>
                            <li>Follow real development workflows</li>
                            <li>Collaborate with mentors and project teams</li>
                            <li>Gain practical industry exposure</li>
                        </ul>
                        <div className="example-box">
                            <h4>Industry Exposure</h4>
                            <div className="skill-chips">
                                <span className="chip tertiary">Agile/Scrum</span>
                                <span className="chip tertiary">Live Git</span>
                                <span className="chip tertiary">Client Logs</span>
                            </div>
                            <p><strong>Experience:</strong> Working on client dataset cleaning and internal automation tools used in company processes.</p>
                        </div>
                    </div>

                    <div className="phase-card scroll-reveal">
                        <div className="card-shine"></div>
                        <div className="phase-indicator">PHASE 03</div>
                        <div className="live-status"><span className="status-dot purple"></span> PERSISTENT</div>
                        <div className="phase-icon"><i className="fas fa-rocket"></i></div>
                        <h3>Placement Assistance</h3>
                        <p>Students who successfully complete the training and internship phases will receive career support, including:</p>
                        <ul>
                            <li>Resume preparation</li>
                            <li>Interview preparation sessions</li>
                            <li>Access to hiring partner interviews</li>
                        </ul>
                        <div className="skill-chips secondary">
                            <span className="chip">Mock Interviews</span>
                            <span className="chip">ATS Optimization</span>
                            <span className="chip">Referrals</span>
                        </div>
                        <p className="eligible-text">Eligible candidates will be connected with companies actively hiring for relevant roles.</p>
                    </div>
                </div>
            </div>

            <div className="program-pathway-box scroll-reveal">
                <div className="pathway-connector">
                    <svg viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path d="M0,50 Q250,0 500,50 T1000,50" fill="none" stroke="rgba(102, 214, 255, 0.2)" strokeWidth="2" strokeDasharray="10 10" />
                        <circle cx="0" cy="50" r="4" fill="#66D6FF">
                            <animate attributeName="cx" from="0" to="1000" dur="5s" repeatCount="indefinite" />
                        </circle>
                    </svg>
                </div>
                <div className="pathway-header">
                    <h3>Structured Career Pathway</h3>
                    <div className="pathway-line"></div>
                </div>
                <div className="pathway-steps">
                    <div className="pathway-step">
                        <div className="start-label">Start <span>as a Student.</span></div>
                        <div className="step-number-glow">01</div>
                        <span className="step-emoji">🧭</span>
                        <h4 className="path-title">Career Guidance by Mentors</h4>
                        <p className="path-desc">Get one-on-one guidance from experts to identify your goals and choose the right learning path.</p>
                    </div>
                    <div className="step-connector">
                        <svg viewBox="0 0 80 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <filter id="glow1"><feGaussianBlur stdDeviation="2" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                            </defs>
                            <path className="connector-glow" d="M0,10 Q40,50 80,50" fill="none" filter="url(#glow1)" />
                            <path className="connector-path" d="M0,10 Q40,50 80,50" fill="none" />
                            <circle className="travel-dot" r="3" fill="#66D6FF">
                                <animateMotion dur="2s" repeatCount="indefinite" path="M0,10 Q40,50 80,50" />
                            </circle>
                        </svg>
                    </div>
                    <div className="pathway-step">
                        <div className="step-number-glow">02</div>
                        <span className="step-emoji">🧠</span>
                        <h4 className="path-title">Industry-Focused Learning</h4>
                        <p className="path-desc">Develop practical skills through project-based sessions designed to match real-world industry needs.</p>
                    </div>
                    <div className="step-connector">
                        <svg viewBox="0 0 80 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <filter id="glow2"><feGaussianBlur stdDeviation="2" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                            </defs>
                            <path className="connector-glow" d="M0,50 Q40,10 80,10" fill="none" filter="url(#glow2)" />
                            <path className="connector-path connector-alt" d="M0,50 Q40,10 80,10" fill="none" />
                            <circle className="travel-dot travel-dot-alt" r="3" fill="#7B2CFF">
                                <animateMotion dur="2.4s" repeatCount="indefinite" path="M0,50 Q40,10 80,10" />
                            </circle>
                        </svg>
                    </div>
                    <div className="pathway-step">
                        <div className="step-number-glow">03</div>
                        <span className="step-emoji">📂</span>
                        <h4 className="path-title">Portfolio & Profile Building</h4>
                        <p className="path-desc">Create a professional portfolio that highlights your achievements and technical strengths effectively.</p>
                    </div>
                    <div className="step-connector">
                        <svg viewBox="0 0 80 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <filter id="glow3"><feGaussianBlur stdDeviation="2" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                            </defs>
                            <path className="connector-glow" d="M0,10 Q40,50 80,50" fill="none" filter="url(#glow3)" />
                            <path className="connector-path" d="M0,10 Q40,50 80,50" fill="none" />
                            <circle className="travel-dot" r="3" fill="#66D6FF">
                                <animateMotion dur="1.8s" repeatCount="indefinite" path="M0,10 Q40,50 80,50" />
                            </circle>
                        </svg>
                    </div>
                    <div className="pathway-step">
                        <div className="step-number-glow">04</div>
                        <span className="step-emoji">📝</span>
                        <h4 className="path-title">Final Evaluation Exam</h4>
                        <p className="path-desc">Evaluate your performance through practical and theory assessments to measure your learning outcomes.</p>
                    </div>
                    <div className="step-connector">
                        <svg viewBox="0 0 80 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <filter id="glow4"><feGaussianBlur stdDeviation="2" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                            </defs>
                            <path className="connector-glow" d="M0,50 Q40,10 80,10" fill="none" filter="url(#glow4)" />
                            <path className="connector-path connector-alt" d="M0,50 Q40,10 80,10" fill="none" />
                            <circle className="travel-dot travel-dot-alt" r="3" fill="#7B2CFF">
                                <animateMotion dur="2.6s" repeatCount="indefinite" path="M0,50 Q40,10 80,10" />
                            </circle>
                        </svg>
                    </div>
                    <div className="pathway-step">
                        <div className="step-number-glow">05</div>
                        <span className="step-emoji">📜</span>
                        <h4 className="path-title">Global Certification</h4>
                        <p className="path-desc">Earn globally recognized certifications to validate your expertise and enhance your professional profile.</p>
                    </div>
                    <div className="step-connector">
                        <svg viewBox="0 0 80 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <filter id="glow5"><feGaussianBlur stdDeviation="2" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                            </defs>
                            <path className="connector-glow" d="M0,10 Q40,50 80,50" fill="none" filter="url(#glow5)" />
                            <path className="connector-path" d="M0,10 Q40,50 80,50" fill="none" />
                            <circle className="travel-dot" r="3" fill="#66D6FF">
                                <animateMotion dur="2.2s" repeatCount="indefinite" path="M0,10 Q40,50 80,50" />
                            </circle>
                        </svg>
                    </div>
                    <div className="pathway-step">
                        <div className="step-number-glow">06</div>
                        <span className="step-emoji">🤝</span>
                        <h4 className="path-title">Internship & Placement</h4>
                        <p className="path-desc">Apply your skills in real-world internships and step into the industry as a confident professional.</p>
                        <div className="end-label">End <span>like a Professional.</span></div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="launch-footer-info">
                    <p className="open-text">This program is open to graduates and final-year students who want to build practical industry skills and improve job opportunities.</p>

                    <div className="important-note-card">
                        <h4><i className="fas fa-exclamation-circle"></i> Important Note</h4>
                        <p>Placement support is provided to candidates who:</p>
                        <ul>
                            <li>Successfully complete the training program</li>
                            <li>Meet performance and attendance requirements</li>
                            <li>Qualify in internship evaluation and interview preparation stages</li>
                        </ul>
                        <p className="terms-text">Terms & Conditions Apply.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerLaunch;
