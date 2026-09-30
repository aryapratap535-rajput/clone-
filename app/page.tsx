import { Header } from '@/components/site-header';
import { Footer } from '@/components/site-footer';
import { Button } from '@/components/ui/button';
import {
  Heart,
  Users,
  User,
  Baby,
  Brain,
  Shield,
  Eye,
  Sparkles,
  ArrowRight,
  Calendar,
  Phone,
  MapPin,
} from 'lucide-react';

const heroImage =
  'https://images.pexels.com/photos/6712685/pexels-photo-6712685.jpeg?auto=compress&cs=tinysrgb&w=1600';
const heroImage2 =
  'https://images.pexels.com/photos/9064680/pexels-photo-9064680.jpeg?auto=compress&cs=tinysrgb&w=800';
const hopeImage =
  'https://images.pexels.com/photos/3958423/pexels-photo-3958423.jpeg?auto=compress&cs=tinysrgb&w=800';
const adultsImage =
  'https://images.pexels.com/photos/7885481/pexels-photo-7885481.jpeg?auto=compress&cs=tinysrgb&w=800';
const couplesImage =
  'https://images.pexels.com/photos/5138013/pexels-photo-5138013.jpeg?auto=compress&cs=tinysrgb&w=800';
const childrenImage =
  'https://images.pexels.com/photos/7869032/pexels-photo-7869032.jpeg?auto=compress&cs=tinysrgb&w=800';
const howWeWorkImage =
  'https://images.pexels.com/photos/7447263/pexels-photo-7447263.jpeg?auto=compress&cs=tinysrgb&w=800';
const specialtiesImage =
  'https://images.pexels.com/photos/7176029/pexels-photo-7176029.jpeg?auto=compress&cs=tinysrgb&w=800';
const scheduleImage =
  'https://images.pexels.com/photos/36729385/pexels-photo-36729385.jpeg?auto=compress&cs=tinysrgb&w=800';

const expertiseTags = [
  'Dissociation',
  'Trauma',
  'Family conflict',
  'Special needs parenting',
  'Depression',
  'Marriage',
  'Anxiety',
  'Relationships',
  'Children',
  'Teens',
  'Intimacy & Connection',
];

const specialties = [
  {
    icon: Shield,
    title: 'Trauma',
    description:
      'We don\u2019t always know when and how we\u2019ve experienced trauma. In therapy, we\u2019ll work together to help you process your past, understand what\u2019s causing you to stay \u201cstuck,\u201d and regain a sense of safety, control, and hope. You don\u2019t have to carry your burdens alone.',
  },
  {
    icon: Brain,
    title: 'Dissociation',
    description:
      'The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we\u2019ll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.',
  },
  {
    icon: Eye,
    title: 'EMDR',
    description:
      'Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.',
  },
  {
    icon: Heart,
    title: 'Special Needs Parenting',
    description:
      'Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Counseling session"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/80" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="mb-6 animate-fade-up text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Online &amp; In-Person Counseling in Newbury Park &amp; Across CA
          </p>
          <h1 className="mb-6 animate-fade-up font-serif text-4xl font-bold leading-tight text-foreground text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            Rebuild your foundation on solid ground and finally begin to{' '}
            <span className="text-primary italic">thrive</span>.
          </h1>
          <p className="mb-10 animate-fade-up text-lg text-foreground/70 sm:text-xl">
            Specialized therapy for adults, couples, teens, and children to
            reflect, heal, and grow.
          </p>
          <div className="flex animate-fade-up flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="rounded-full px-8">
              Schedule an Appointment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 bg-background/50 backdrop-blur-sm"
            >
              Learn More
            </Button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center pb-8">
          <div className="flex animate-bounce flex-col items-center gap-1 text-foreground/50">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowRight className="h-4 w-4 rotate-90" />
          </div>
        </div>
      </section>

      {/* Hope Section */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={hopeImage}
                    alt="Therapist in counseling session"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-primary p-6 text-primary-foreground shadow-xl sm:block">
                  <p className="font-serif text-3xl font-bold">100%</p>
                  <p className="text-sm">Personalized Care</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="mb-4 font-serif text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                You&rsquo;re holding onto hope that life can be better than it
                is right now.
              </h2>
              <p className="mb-6 text-lg font-semibold text-primary">
                At Conejo Valley Family Counseling we want to make that hope a
                reality.
              </p>
              <p className="mb-6 text-foreground/70 leading-relaxed">
                Whether you&rsquo;re an adult seeking personal growth, looking
                to work through your trauma, a couple working on your
                relationship, or a parent looking for support for your child, we
                provide a compassionate and safe space to help you navigate all
                of life&rsquo;s ups and downs.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                First and foremost, we believe what you&rsquo;re going through
                is real, valid, and worthy of support. Our team offers clients
                in the Newbury Park area and across CA an environment to discover
                a new life and a deeper sense of self in the midst of their
                struggles. As we tap into the power of connection and
                understanding, you can find your footing again and take a
                transformative path forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="bg-secondary/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              Who we <span className="text-primary italic">help</span>
            </h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-primary" />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Adults */}
            <div className="group overflow-hidden rounded-2xl bg-card shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={adultsImage}
                  alt="Adults therapy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-primary-foreground">
                  <User className="h-6 w-6" />
                  <h3 className="font-serif text-2xl font-bold">Adults</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-foreground/70 leading-relaxed">
                  Feeling stuck or overwhelmed? We help adults find clarity,
                  build resilience, and move forward with confidence by
                  addressing the root causes of anxiety, stress, and emotional
                  pain.
                </p>
              </div>
            </div>

            {/* Couples */}
            <div className="group overflow-hidden rounded-2xl bg-card shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={couplesImage}
                  alt="Couples therapy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-primary-foreground">
                  <Users className="h-6 w-6" />
                  <h3 className="font-serif text-2xl font-bold">Couples</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-foreground/70 leading-relaxed">
                  Relationships require effort, and we&rsquo;re here to help you
                  strengthen yours. We guide couples through challenges like
                  communication breakdowns and trust issues, helping you
                  rebuild intimacy and strengthen your relationship.
                </p>
              </div>
            </div>

            {/* Children & Teens */}
            <div className="group overflow-hidden rounded-2xl bg-card shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={childrenImage}
                  alt="Children and teens therapy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-primary-foreground">
                  <Baby className="h-6 w-6" />
                  <h3 className="font-serif text-2xl font-bold">
                    Children &amp; Teens
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-foreground/70 leading-relaxed">
                  Kids need support, too. We help them process big emotions,
                  cope with challenging family situations, build coping skills,
                  and feel understood, while also working closely with their
                  parents to create a nurturing environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative overflow-hidden bg-primary py-20 sm:py-28">
        <div className="absolute inset-0 opacity-10">
          <img
            src={heroImage2}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Sparkles className="mx-auto mb-6 h-10 w-10 text-primary-foreground/60" />
          <blockquote className="font-serif text-2xl font-medium leading-relaxed text-primary-foreground sm:text-3xl md:text-4xl">
            &ldquo;You deserve a place where your story is heard, valued, and
            understood. Nothing will be too heavy for us to carry
            together.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h3 className="mb-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Our areas of <span className="text-primary italic">expertise</span>
            </h3>
            <div className="mx-auto h-1 w-20 rounded-full bg-primary" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {expertiseTags.map((tag, i) => (
              <span
                key={tag}
                className={`rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary hover:text-primary-foreground ${
                  i % 3 === 0
                    ? 'bg-primary/10 text-primary'
                    : 'bg-card text-foreground/70'
                }`}
              >
                {tag}
              </span>
            ))}
            <span className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium italic text-muted-foreground">
              &hellip;and more.
            </span>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="bg-secondary/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              How We Work
            </p>
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              We&rsquo;re here to make a difference.
            </h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-primary" />
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={howWeWorkImage}
                  alt="Family therapy session"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg font-semibold text-primary">
                The clients we work with are balancing so many things at once,
                it&rsquo;s often hard for them to put themselves first.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Here, your needs are always top priority. Our team takes the
                time to deeply listen to our clients in order to truly
                understand their story and their struggles. We recognize that
                no two people are the same and that personalized therapy means
                an intentional, tailored approach. (You won&rsquo;t find
                anything &ldquo;one-size-fits-all&rdquo; here.) If you&rsquo;re
                ready to do the work, we&rsquo;re ready to help.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Sometimes we may gently challenge you to look at things
                differently and other times we may explore your emotions, all
                while encouraging you to practice what you&rsquo;ve learned in
                your daily life. We take what we do seriously because we know how
                important it is for you to heal from what&rsquo;s hurting you,
                discover a fulfilling life, and build meaningful relationships.
                Our goal is to walk alongside you in this journey, offering
                support and guidance as you uncover your strengths and embrace
                what the future can hold for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Honoring where you&rsquo;ve been{' '}
              <span className="text-primary italic">&amp;</span> helping shape
              where you&rsquo;re headed.
            </h2>
            <h3 className="mb-4 text-xl text-muted-foreground">
              Our <span className="font-semibold text-primary">specialties</span>{' '}
              include&hellip;
            </h3>
            <div className="mx-auto h-1 w-20 rounded-full bg-primary" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {specialties.map((spec) => {
              const Icon = spec.icon;
              return (
                <div
                  key={spec.title}
                  className="group rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h4 className="mb-3 font-serif text-xl font-bold text-foreground">
                    {spec.title}
                  </h4>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {spec.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Schedule CTA Section */}
      <section className="relative overflow-hidden bg-primary py-20 sm:py-28">
        <div className="absolute inset-0 opacity-15">
          <img
            src={scheduleImage}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
            Schedule an Appointment
          </p>
          <h2 className="mb-6 font-serif text-3xl font-bold text-primary-foreground sm:text-4xl md:text-5xl">
            Find a therapist who is the right fit for{' '}
            <span className="italic">you</span>.
          </h2>
          <p className="mb-10 text-lg text-primary-foreground/80 leading-relaxed">
            Coming to therapy is a courageous decision, and connecting with the
            right kind of therapist makes all the difference. We understand that
            your journey is personal, and we&rsquo;re here to support you with
            care and understanding every step of the way. Each member of our
            team brings dedicated expertise and a commitment to support you in
            your struggles. We want you to feel prioritized, understood, and
            empowered.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="rounded-full bg-primary-foreground px-8 text-primary hover:bg-primary-foreground/90"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule an Appointment
            </Button>
            <a
              href="tel:8052423120"
              className="flex items-center gap-2 text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              <Phone className="h-5 w-5" />
              <span className="text-lg">805.242.3120</span>
            </a>
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <div className="flex items-center gap-3 text-foreground/70">
              <MapPin className="h-5 w-5 text-primary" />
              <p className="text-lg">
                We want to make getting started simple. You&rsquo;re welcome to
                come into our office in Newbury Park or schedule virtual
                appointments from anywhere in CA&mdash;whatever works best for
                you.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
              <span className="rounded-full bg-secondary px-4 py-2">
                In-Person in Newbury Park
              </span>
              <span className="rounded-full bg-secondary px-4 py-2">
                Virtual Across California
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
