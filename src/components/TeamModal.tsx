import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Instagram, Twitter, Linkedin, Github, Globe } from 'lucide-react';

interface TeamMember {
  name: string;
  photo: string;
  role: string;
  description: string;
  tech: string;
  socials: {
    instagram?: string;
    x?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
}

interface TeamModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

const socialIcons: Record<string, React.ReactNode> = {
  instagram: <Instagram size={20} />,
  x: <Twitter size={20} />,
  linkedin: <Linkedin size={20} />,
  github: <Github size={20} />,
  website: <Globe size={20} />,
};

export function TeamModal({ member, onClose }: TeamModalProps) {
  if (!member) return null;

  return (
    <AnimatePresence>
      {member && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#111318] border border-white/10 w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-2xl relative"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors z-10 p-2 hover:bg-white/5 rounded-full"
            >
              <X size={28} />
            </button>

            <div className="flex flex-col md:flex-row">
              {/* Left Side - Image & Socials */}
              <div className="w-full md:w-2/5 p-10 bg-linear-to-b from-white/2 to-transparent border-r border-white/5 flex flex-col items-center">
                <div className="w-40 h-40 mx-auto mb-8 rounded-full p-1 bg-linear-to-tr from-[#F3BA2F] to-transparent shadow-[0_0_30px_rgba(243,186,47,0.15)]">
                  <img 
                    src={member.photo} 
                    alt={member.name} 
                    className="w-full h-full object-cover rounded-full bg-[#0D0F14]"
                  />
                </div>

                <div className="flex flex-wrap justify-center gap-3">
                  {Object.entries(member.socials).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#F3BA2F] hover:border-[#F3BA2F]/30 hover:bg-white/10 transition-all duration-300 group"
                      title={platform.charAt(0).toUpperCase() + platform.slice(1)}
                    >
                      <span className="group-hover:scale-110 transition-transform">
                        {socialIcons[platform] || <Globe size={18} />}
                      </span>
                    </a>
                  ))}
                </div>

                <div className="mt-auto pt-10 text-center">
                  <p className="text-slate-500 text-[9px] font-black uppercase tracking-[0.3em] italic opacity-50">
                    #TEAMBLING • CORE
                  </p>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="w-full md:w-3/5 p-10 md:pl-6 max-h-[70vh] md:max-h-none overflow-y-auto">
                <h3 className="text-white text-3xl font-black mb-2 tracking-tight">{member.name}</h3>
                <p className="text-[#F3BA2F] text-xs font-black uppercase tracking-[0.2em] mb-8">{member.role}</p>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-3">Biografía</h4>
                    <p className="text-slate-300 text-sm leading-relaxed font-medium">
                      {member.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-3">Tecnologías y Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.tech.split(' · ').map((skill, i) => (
                        <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                          {skill.replace(' • ', '')}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
