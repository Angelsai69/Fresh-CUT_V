import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, ShoppingCart, User, Sparkles, Instagram, Twitter, Facebook } from 'lucide-react'
import { tokens, getTheme } from './tokens'
import { HomeScreen } from './screens/HomeScreen'
import { ListScreen } from './screens/ListScreen'
import { ProfileScreen } from './screens/ProfileScreen'

const TABS = [
  { id: 'home',    icon: Home,         label: 'Home' },
  { id: 'list',    icon: ShoppingCart, label: 'My List' },
  { id: 'profile', icon: User,         label: 'Profile' },
]

const SOCIAL = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Twitter,   label: 'X / Twitter', href: '#' },
  { icon: Facebook,  label: 'Facebook',  href: '#' },
]

export default function App() {
  const [dark, setDark]           = useState(false)
  const [activeTab, setActiveTab] = useState('home')
  const t = getTheme(dark)

  return (
    <div style={{
      minHeight: '100vh',
      background: t.bg,
      fontFamily: "-apple-system, 'SF Pro Display', 'SF Pro Text', 'Inter', sans-serif",
      color: t.text,
      transition: 'background 0.35s ease, color 0.35s ease',
      position: 'relative',
      overflowX: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }}>

      {/* TOP BAR — frosted glass 25% */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={tokens.motion.slow}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 100,
          background: t.glass,
          backdropFilter: 'blur(32px)',
          WebkitBackdropFilter: 'blur(32px)',
          borderBottom: `1px solid ${t.border}`,
          padding: '12px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 12,
        }}
      >
        {/* Brand */}
        <div style={{ flexShrink: 0 }}>
          <div style={{
            fontSize: '20px',
            fontWeight: 800,
            letterSpacing: '-0.5px',
            lineHeight: 1.1,
            background: `linear-gradient(135deg, ${tokens.colors.mintStart}, ${tokens.colors.mintEnd})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Fresh~CUT
          </div>
          <div style={{ fontSize: '11px', color: t.textSub, fontWeight: 500, marginTop: 1 }}>
            Gaithersburg, MD
          </div>
        </div>

        {/* Auth buttons */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <motion.button
            whileTap={{ scale: 0.94 }}
            transition={tokens.motion.fast}
            style={{
              padding: '7px 15px',
              borderRadius: tokens.radius.full,
              border: `1.5px solid ${t.border}`,
              background: 'transparent',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: 600,
              color: t.text,
            }}
          >
            Sign In
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.94 }}
            transition={tokens.motion.fast}
            style={{
              padding: '7px 15px',
              borderRadius: tokens.radius.full,
              border: 'none',
              background: `linear-gradient(135deg, ${tokens.colors.mintStart}, ${tokens.colors.mintEnd})`,
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: 700,
              color: tokens.colors.navy,
            }}
          >
            Join Free
          </motion.button>
        </div>
      </motion.header>

      {/* SCROLLABLE CONTENT */}
      <main style={{ flex: 1, paddingTop: 76, paddingBottom: 160 }}>
        <AnimatePresence mode="wait">
          {activeTab === 'home'    && <HomeScreen    t={t} key="home" />}
          {activeTab === 'list'    && <ListScreen    t={t} key="list" />}
          {activeTab === 'profile' && <ProfileScreen t={t} dark={dark} setDark={setDark} key="profile" />}
        </AnimatePresence>

        {/* LEGAL FOOTER */}
        <footer style={{
          padding: '40px 24px 24px',
          borderTop: `1px solid ${t.border}`,
          marginTop: 48,
        }}>
          <div style={{
            fontSize: '18px',
            fontWeight: 800,
            letterSpacing: '-0.5px',
            marginBottom: 4,
            background: `linear-gradient(135deg, ${tokens.colors.mintStart}, ${tokens.colors.mintEnd})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            display: 'inline-block',
          }}>
            Fresh~CUT
          </div>
          <p style={{
            fontSize: '13px',
            color: t.textSub,
            lineHeight: 1.6,
            margin: '8px 0 20px',
            maxWidth: 320,
          }}>
            AI-powered grocery price comparison. Save smarter, live fresher.
          </p>

          {/* Footer social icons */}
          <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
            {SOCIAL.map(({ icon: Icon, label }) => (
              <a key={label} href="#" aria-label={label} style={{
                width: 36, height: 36,
                borderRadius: tokens.radius.full,
                border: `1.5px solid ${t.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: t.textSub, textDecoration: 'none',
              }}>
                <Icon size={16} strokeWidth={1.8} />
              </a>
            ))}
          </div>

          {/* Legal links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 20px', marginBottom: 16 }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility', 'Do Not Sell My Data'].map((link) => (
              <a key={link} href="#" style={{
                fontSize: '12px', color: t.textSub,
                textDecoration: 'none', fontWeight: 500,
              }}>{link}</a>
            ))}
          </div>

          <p style={{ fontSize: '11px', color: t.textSub, opacity: 0.55, lineHeight: 1.6 }}>
            © {new Date().getFullYear()} Fresh~CUT Inc. All rights reserved.<br />
            Prices and availability subject to change. Not affiliated with any grocery retailer.<br />
            Fresh~CUT is not responsible for pricing errors or store inventory discrepancies.
          </p>
        </footer>
      </main>

      {/* BOTTOM NAV — frosted glass 25% + social icons strip */}
      <div style={{
        position: 'fixed',
        bottom: 0, left: 0, right: 0,
        background: t.glass,
        backdropFilter: 'blur(32px)',
        WebkitBackdropFilter: 'blur(32px)',
        borderTop: `1px solid ${t.border}`,
        zIndex: 100,
      }}>
        {/* Main nav */}
        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '10px 0 4px' }}>
          {TABS.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <motion.button
                key={tab.id}
                whileTap={{ scale: 0.86 }}
                transition={tokens.motion.fast}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
                  padding: '4px 28px', border: 'none', background: 'transparent',
                  cursor: 'pointer', position: 'relative',
                  color: isActive ? tokens.colors.mintEnd : t.textSub,
                  transition: 'color 0.2s',
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="navIndicator"
                    style={{
                      position: 'absolute', top: -1,
                      width: 20, height: 3,
                      borderRadius: tokens.radius.full,
                      background: `linear-gradient(90deg, ${tokens.colors.mintStart}, ${tokens.colors.mintEnd})`,
                    }}
                    transition={tokens.motion.standard}
                  />
                )}
                <Icon size={22} strokeWidth={isActive ? 2.5 : 1.8} />
                <span style={{ fontSize: '10px', fontWeight: isActive ? 700 : 400, letterSpacing: '0.2px' }}>
                  {tab.label}
                </span>
              </motion.button>
            )
          })}
        </div>

        {/* Social strip */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: 28,
          paddingTop: 6, paddingBottom: 16,
          borderTop: `1px solid ${t.border}`,
        }}>
          {SOCIAL.map(({ icon: Icon, label }) => (
            <a key={label} href="#" aria-label={label} style={{
              color: t.textSub, opacity: 0.55,
              textDecoration: 'none', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
            }}>
              <Icon size={13} strokeWidth={1.8} />
            </a>
          ))}
        </div>
      </div>

      {/* FLOATING AI BUTTON — coral/red, clearly distinct from mint */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        transition={{ ...tokens.motion.slow, delay: 0.4 }}
        style={{
          position: 'fixed',
          bottom: 108, right: 20,
          width: 56, height: 56,
          borderRadius: tokens.radius.full,
          background: `linear-gradient(135deg, #FF6B6B, #FF4757)`,
          border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(255,71,87,0.45)',
          zIndex: 200,
        }}
      >
        <Sparkles size={22} color="white" strokeWidth={2} />
      </motion.button>

    </div>
  )
}
