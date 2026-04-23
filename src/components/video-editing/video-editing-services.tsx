'use client';
import { Zap, Pencil, Settings2, Sparkles, Infinity, Lock, Smartphone } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { FeatureCard } from './grid-feature-cards';

const features = [
	{
		title: 'Fast Reliable Delivery Service',
		icon: Zap,
		description: 'We meet deadlines with quick turnaround times without compromising quality.',
	},
	{
		title: 'Unlimited Flexible Revision Support',
		icon: Infinity,
		description: 'Your satisfaction comes first. We provide revisions until your video aligns with your creative vision.',
	},
	{
		title: 'Optimized for Every Platform',
		icon: Smartphone,
		description: 'Vertical, horizontal, square—we deliver your final video in the perfect format for any platform or device.',
	},
	{
		title: 'Safe & Secure File Handling',
		icon: Lock,
		description: 'Your footage and project files are handled privately and securely from upload to final delivery.',
	},
	{
		title: 'Control',
		icon: Settings2,
		description: 'It supports helping developers and businesses innovate.',
	},
	{
		title: 'Built for AI',
		icon: Sparkles,
		description: 'It supports helping developers and businesses innovate.',
	},
];

export default function VideoEditingGrid() {
	return (
		<section className="py-16 md:py-20">
			<div className="mx-auto w-full max-w-5xl space-y-8 px-4">
				<AnimatedContainer className="mx-auto max-w-3xl text-center">
					<h2 className="text-3xl font-bold tracking-wide text-balance md:text-4xl lg:text-5xl xl:font-extrabold">
						Why Choose Our Video Editing Service
					</h2>
					<p className="text-muted-foreground mt-4 text-sm tracking-wide text-balance md:text-base">
						Transforming your vision into stunning visual stories
					</p>
				</AnimatedContainer>

				<AnimatedContainer
					delay={0.4}
					className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed sm:grid-cols-2 md:grid-cols-3"
				>
					{features.map((feature, i) => (
						<FeatureCard key={i} feature={feature} />
					))}
				</AnimatedContainer>
			</div>
		</section>
	);
}

type ViewAnimationProps = {
	delay?: number;
	className?: React.ComponentProps<typeof motion.div>['className'];
	children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return children;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
