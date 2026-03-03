import { motion } from 'framer-motion'
import { ChevronDown, Sun, Moon } from 'lucide-react'
import { tokens, mintGradient } from '../tokens'

const STATS = [
  { label: 'Trips',  value: '12' },
  { label: 'Items',  value: '87' },
  { label: 'Saved',  value: '$214' },
]

const MENU_ITEMS = ['Notifications', 'Preferred Stores', 'Price Alerts', 'Privacy', 'Help & Support']

export function ProfileScreen({ t, dark, setDark }) {
  return (
    <motion.div
      key="profile"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={tokens.motion.standard}
      style={{ padding: '32px 24px 0' }}
    >
      {/* Profile Banner */}
      <div style={{
        background: mintGradient,
        borderRadius: tokens.radius.hero,
        padding: '28px 24px',
        marginBottom: 24,
        display: 'flex', alignItems: 'center', gap: 20,
      }}>
        <div style={{
          width: 64, height: 64, borderRadius: tokens.radius.full,
          background: 'rgba(255,255,255,0.25)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 28, flexShrink: 0,
        }}>👤</div>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: tokens.font.h2.size, fontWeight: 600, color: 'white', margin: 0, letterSpacing: '-0.2px' }}>
            Alex Chen
          </p>
          <p style={{ fontSize: tokens.font.small.size, color: 'rgba(255,255,255,0.75)', margin: '4px 0 0' }}>
            Saved $214 this month
          </p>
        </div>
      </div>

      {/* Stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 24 }}>
        {STATS.map((s) => (
          <div key={s.label} style={{
            background: t.card, borderRadius: tokens.radius.card,
            padding: 16, textAlign: 'center', boxShadow: t.shadow1,
          }}>
            <p style={{ fontSize: '22px', fontWeight: 700, color: t.text, margin: 0, letterSpacing: '-0.3px' }}>
              {s.value}
            </p>
            <p style={{ fontSize: tokens.font.micro.size, color: t.textSub, margin: '4px 0 0' }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {/* Appearance — Dark/Light toggle lives here */}
      <div style={{
        background: t.card,
        borderRadius: tokens.radius.card,
        padding: '16px 20px',
        marginBottom: 8,
        boxShadow: t.shadow1,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div>
          <p style={{ fontSize: tokens.font.body.size, color: t.text, margin: 0, fontWeight: 500 }}>
            Appearance
          </p>
          <p style={{ fontSize: tokens.font.micro.size, color: t.textSub, margin: '2px 0 0' }}>
            {dark ? 'Dark mode' : 'Light mode'}
          </p>
        </div>
        {/* Toggle switch */}
        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={() => setDark(!dark)}
          style={{
            width: 56,
            height: 30,
            borderRadius: tokens.radius.full,
            background: dark
              ? `linear-gradient(135deg, ${tokens.colors.mintStart}, ${tokens.colors.mintEnd})`
              : 'rgba(15,43,70,0.12)',
            border: 'none',
            cursor: 'pointer',
            position: 'relative',
            transition: 'background 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            padding: '0 3px',
            justifyContent: dark ? 'flex-end' : 'flex-start',
          }}
        >
          <motion.div
            layout
            transition={tokens.motion.standard}
            style={{
              width: 24, height: 24,
              borderRadius: tokens.radius.full,
              background: 'white',
              boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            {dark
              ? <Moon size={12} color={tokens.colors.mintEnd} strokeWidth={2} />
              : <Sun size={12} color={tokens.colors.textSecondary} strokeWidth={2} />
            }
          </motion.div>
        </motion.button>
      </div>

      {/* Menu items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {MENU_ITEMS.map((item) => (
          <motion.div
            key={item}
            whileTap={{ scale: 0.985 }}
            transition={tokens.motion.fast}
            style={{
              background: t.card,
              borderRadius: tokens.radius.card,
              padding: '16px 20px',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              boxShadow: t.shadow1, cursor: 'pointer',
            }}
          >
            <span style={{ fontSize: tokens.font.body.size, color: t.text }}>{item}</span>
            <ChevronDown size={16} color={t.textSub} style={{ transform: 'rotate(-90deg)' }} />
          </motion.div>
        ))}
      </div>

      {/* Sign out */}
      <motion.button
        whileTap={{ scale: 0.97 }}
        transition={tokens.motion.fast}
        style={{
          width: '100%',
          marginTop: 16,
          padding: '14px',
          borderRadius: tokens.radius.card,
          border: `1.5px solid ${tokens.colors.coral}40`,
          background: `${tokens.colors.coral}08`,
          cursor: 'pointer',
          fontSize: tokens.font.body.size,
          fontWeight: 600,
          color: tokens.colors.coral,
        }}
      >
        Sign Out
      </motion.button>
    </motion.div>
  )
}
