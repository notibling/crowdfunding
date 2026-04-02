import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Instagram, Twitter, Linkedin, Github, Globe } from 'lucide-react';

interface TeamMember {
  name: string;
  photo: string;
  role: string;
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
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#111318] border border-white/10 w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl relative"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="p-8 text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full p-1 bg-linear-to-tr from-[#F3BA2F] to-transparent">
                <img 
                  src={member.photo} 
                  alt={member.name} 
                  className="w-full h-full object-cover rounded-full bg-[#0D0F14]"
                />
              </div>

              <h3 className="text-white text-2xl font-black mb-1">{member.name}</h3>
              <p className="text-[#F3BA2F] text-xs font-bold uppercase tracking-widest mb-8">{member.role}</p>

              <div className="flex justify-center items-center gap-4">
                {Object.entries(member.socials).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#F3BA2F] hover:border-[#F3BA2F]/30 hover:bg-white/10 transition-all duration-300 group"
                    title={platform.charAt(0).toUpperCase() + platform.slice(1)}
                  >
                    <span className="group-hover:scale-110 transition-transform">
                      {socialIcons[platform] || <Globe size={20} />}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white/2 p-4 text-center border-t border-white/5">
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest italic">
                #TEAMBLING • CORE
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
