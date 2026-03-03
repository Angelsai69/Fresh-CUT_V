import { TrendingDown } from 'lucide-react'
import { tokens, mintGradient } from '../tokens'

export function SavingsBanner() {
  return (
    <div
      style={{
        background: mintGradient,
        borderRadius: tokens.radius.hero,
        padding: '28px 24px',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        {/* Left: total */}
        <div>
          <p
            style={{
              fontSize: tokens.font.micro.size,
              fontWeight: 700,
              color: tokens.colors.navy,
              opacity: 0.65,
              margin: '0 0 8px',
              letterSpacing: '0.8px',
              textTransform: 'uppercase',
            }}
          >
            Smart Basket · 6 Items
          </p>
          <p
            style={{
              fontSize: '36px',
              fontWeight: 700,
              color: 'white',
              margin: 0,
              letterSpacing: '-0.5px',
            }}
          >
            $58.17
          </p>
          <p
            style={{
              fontSize: tokens.font.small.size,
              color: 'rgba(255,255,255,0.75)',
              margin: '6px 0 0',
              fontWeight: 500,
            }}
          >
            at Trader Joe's · Best price today
          </p>
        </div>

        {/* Right: savings pill */}
        <div
          style={{
            background: 'rgba(15,43,70,0.15)',
            borderRadius: tokens.radius.card,
            padding: '12px 16px',
            backdropFilter: 'blur(8px)',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontSize: tokens.font.micro.size,
              fontWeight: 700,
              color: 'rgba(255,255,255,0.7)',
              margin: '0 0 4px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            You Save
          </p>
          <p
            style={{
              fontSize: '24px',
              fontWeight: 700,
              color: tokens.colors.navy,
              margin: 0,
              letterSpacing: '-0.3px',
            }}
          >
            $22.05
          </p>
        </div>
      </div>

      {/* Stat pills */}
      <div style={{ marginTop: 20, display: 'flex', gap: 8 }}>
        <div
          style={{
            flex: 1,
            background: 'rgba(255,255,255,0.20)',
            borderRadius: tokens.radius.sm,
            padding: '10px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <TrendingDown size={15} color="white" />
          <span style={{ fontSize: tokens.font.micro.size, fontWeight: 600, color: 'white' }}>
            27% below avg. price
          </span>
        </div>
        <div
          style={{
            background: 'rgba(255,255,255,0.20)',
            borderRadius: tokens.radius.sm,
            padding: '10px 16px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: tokens.font.micro.size, fontWeight: 600, color: 'white' }}>
            3 stores compared
          </span>
        </div>
      </div>
    </div>
  )
}
