import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/valentines')({
  component: ValentinesComponent,
});

function ValentinesComponent() {
  const [password, setPassword] = React.useState('');
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const correctPassword = 'Lebanese Cedar';

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === correctPassword.toLowerCase()) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password. Try again! 💕');
      setPassword('');
    }
  };

  if (!isAuthenticated) {
    return (
      <div
        style={{
          minHeight: '100vh',
          background:
            'linear-gradient(135deg, #f8d7da 0%, #f5c6cb 50%, #f1b0b7 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div
          style={{
            background: 'white',
            padding: '3rem',
            borderRadius: '20px',
            boxShadow: '0 20px 40px rgba(139, 69, 19, 0.15)',
            textAlign: 'center',
            maxWidth: '500px',
            width: '90%',
          }}
        >
          <h1
            style={{
              color: '#8b4d69',
              fontSize: '2.5rem',
              marginBottom: '1rem',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            💝 Dear Lou Po 💝
          </h1>

          <p
            style={{
              color: '#6b4e7d',
              fontSize: '1.2rem',
              marginBottom: '2rem',
              lineHeight: '1.6',
            }}
          >
            Happy Valentine's Day 💕 To unlock this card you need to solve this
            riddle...
          </p>

          <form onSubmit={handlePasswordSubmit}>
            <div
              style={{
                fontSize: '1.3rem',
                color: '#8b4d69',
                marginBottom: '1rem',
                fontWeight: 'bold',
              }}
            >
              That's so
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  margin: '0 10px',
                  padding: '8px 15px',
                  border: '3px solid #c9a6b0',
                  borderRadius: '25px',
                  fontSize: '1.1rem',
                  textAlign: 'center',
                  outline: 'none',
                  background: '#f8f5f6',
                  minWidth: '200px',
                }}
                placeholder="password here"
                required
              />
              of u ✨
            </div>

            <button
              type="submit"
              style={{
                background: 'linear-gradient(45deg, #c9a6b0, #a8828a)',
                color: 'white',
                border: 'none',
                padding: '12px 30px',
                borderRadius: '25px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginTop: '1rem',
                transition: 'transform 0.2s',
                boxShadow: '0 4px 15px rgba(168, 130, 138, 0.3)',
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = 'scale(1.05)')
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              💌 Unlock Valentine's Card
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #e8c5c5 0%, #d4a5a5 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Georgia, serif',
        padding: '20px',
      }}
    >
      <div
        style={{
          background: 'white',
          padding: '3rem',
          borderRadius: '20px',
          boxShadow: '0 20px 40px rgba(139, 69, 19, 0.2)',
          textAlign: 'center',
          maxWidth: '600px',
          width: '90%',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Floating hearts decoration */}
        <div
          style={{
            position: 'absolute',
            top: '10px',
            left: '20px',
            fontSize: '2rem',
            opacity: 0.3,
            animation: 'float 3s ease-in-out infinite',
          }}
        >
          💕
        </div>
        <div
          style={{
            position: 'absolute',
            top: '20px',
            right: '30px',
            fontSize: '1.5rem',
            opacity: 0.4,
            animation: 'float 2s ease-in-out infinite reverse',
          }}
        >
          💖
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '40px',
            fontSize: '1.8rem',
            opacity: 0.3,
            animation: 'float 2.5s ease-in-out infinite',
          }}
        >
          💝
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            right: '20px',
            fontSize: '1.3rem',
            opacity: 0.4,
            animation: 'float 3.5s ease-in-out infinite reverse',
          }}
        >
          💗
        </div>

        <h1
          style={{
            color: '#8b4d69',
            fontSize: '3rem',
            marginBottom: '1.5rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            background: 'linear-gradient(45deg, #a8828a, #c9a6b0, #a8828a)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Happy First Married Valentine's Day! 💕
        </h1>

        <div
          style={{
            fontSize: '1.1rem',
            color: '#6b4e7d',
            lineHeight: '1.7',
            marginBottom: '2rem',
            textAlign: 'left',
          }}
        >
          <p style={{ marginBottom: '1.2rem' }}>
            It's crazy to think that another year has passed since we celebrated
            our first valentine's day when we were dating. I still remember
            being stressed out about where to take us and trying to get a
            reservation and getting you a memorable bouquet of flowers. You
            deserve the best.
          </p>

          <p style={{ marginBottom: '1.2rem' }}>
            And while I hope you enjoy and love the flowers (and you can trust
            me to get you nice flowers 🥰), I also know that you genuinely love
            me regardless of what we do or what I give you for valentine's day.
            I am so thankful for you.
          </p>

          <p style={{ marginBottom: '1.2rem' }}>
            Marriage has brought a different set of challenges and growth
            opportunities, but also a whole different level of love and intimacy
            that I am so thankful for. I appreciate all the ways that you love
            me, from making breakfast for me to asking me about my day to
            encouraging me to not go back to bed in the mornings to showing me
            love and grace even in the hard times.
          </p>

          <p style={{ marginBottom: '1.2rem' }}>
            I know to some people couples valentine's day is just another day,
            and in a sense it is. But I will take every opportunity to reiterate
            my love for you by my words and actions.
          </p>
        </div>

        <div
          style={{
            background: 'linear-gradient(45deg, #f4e4c7, #e8cbb0)',
            padding: '1.5rem',
            borderRadius: '15px',
            margin: '2rem 0',
            border: '3px solid #c9a6b0',
          }}
        >
          <p
            style={{
              fontSize: '1.1rem',
              color: '#2d3436',
              fontStyle: 'italic',
              margin: 0,
              textAlign: 'center',
            }}
          >
            "Husbands, love your wives, as Christ loves the church and gave
            himself up for her" - Ephesians 5:25
          </p>
        </div>

        <div
          style={{
            fontSize: '1.1rem',
            color: '#6b4e7d',
            lineHeight: '1.7',
            marginBottom: '2rem',
            textAlign: 'left',
          }}
        >
          <p style={{ marginBottom: '1.2rem' }}>
            As I seek to live this verse out, though imperfectly, with God's
            help I hope to encourage us to continue to walk in the light and
            grow in our faith and joy and satisfaction in the Lord. And I'm so
            glad to walk the road of sanctification with you, lou po 🥰.
          </p>

          <p
            style={{
              marginBottom: '1.2rem',
              fontSize: '1.3rem',
              color: '#8b4d69',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Love you so much! 💖
          </p>
        </div>

        <p
          style={{
            fontSize: '1.2rem',
            color: '#a8828a',
            marginTop: '2rem',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          Your Lou gong 👩🏻‍❤️‍💋‍👨🏻
        </p>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}
