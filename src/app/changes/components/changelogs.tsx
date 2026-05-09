import { Badge } from "@/app/changes/components/badge";
import { Frame, FrameHeader, FramePanel } from "@/app/changes/components/frame";
import {
  Timeline,
  TimelineContent,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/app/changes/components/timeline";

import { cn } from "@/lib/utils";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/changes/components/avatar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/app/changes/components/collapsible";
import { Spinner } from "@/app/changes/components/spinner";
import { CheckIcon, CircleIcon, ChevronRightIcon } from "lucide-react";

const pipelineSteps = [
  {
    id: 1,
    title: "V1.0",
    duration: "08-05-2026",
    status: "completed",
    description: ["Successfully deployed on vercel server."],
    user: {
      name: "Mohsin",
      avatar: "/people/mohsin.jpg",
    },
  },
  {
    id: 2,
    title: "V1.1",
    duration: "09-05-2026",
    status: "active",
    description: [
      "Footer social media icons clickable to live urls.",
      "All services card mobile responsiveness fixxed.",
      "Navigation bar fixed on mobile devices",
    ],
    user: {
      name: "Mohsin",
      avatar: "/people/mohsin.jpg",
    },
  },
];

function StatusIcon({ status }: { status: string }) {
  if (status === "completed") return <CheckIcon className="size-3.5" />;
  if (status === "active") return <Spinner className="size-3.5" />;
  return <CircleIcon className="size-3.5" />;
}

function StatusBadge({
  status,
  duration,
}: {
  status: string;
  duration: string;
}) {
  const variant =
    status === "completed"
      ? "success-light"
      : status === "active"
        ? "info-light"
        : "warning-light";

  return (
    <Badge variant={variant} size="sm">
      {duration}
    </Badge>
  );
}

export function Pattern() {
  return (
    <div className="w-full max-w-lg">
      <Timeline defaultValue={3}>
        {pipelineSteps.map((step) => (
          <TimelineItem key={step.id} step={step.id} className="ms-10 pb-10">
            <TimelineHeader>
              <TimelineSeparator className="group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-7" />
              <div className="flex items-center gap-2">
                <TimelineTitle className="text-sm font-semibold">
                  {step.title}
                </TimelineTitle>
                <StatusBadge status={step.status} duration={step.duration} />
              </div>
              <TimelineIndicator
                className={cn(
                  "bg-muted text-muted-foreground group-data-completed/timeline-item:bg-primary group-data-completed/timeline-item:text-primary-foreground flex size-6 items-center justify-center border-none group-data-[orientation=vertical]/timeline:-left-7",
                  step.status === "active" && "ring-primary/20 ring-2",
                )}
              >
                <StatusIcon status={step.status} />
              </TimelineIndicator>
            </TimelineHeader>
            <TimelineContent className="mt-2">
              <Frame stacked dense spacing="sm">
                <Collapsible defaultOpen className="group/collapsible">
                  <CollapsibleTrigger className="flex w-full">
                    <FrameHeader className="flex grow flex-row items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <Avatar className="size-5">
                          <AvatarImage
                            src={step.user.avatar}
                            alt={step.user.name}
                          />
                          <AvatarFallback>
                            {step.user.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-muted-foreground text-xs font-medium">
                          {step.user.name}
                        </span>
                      </div>
                      <ChevronRightIcon className="text-muted-foreground size-4 transition-transform duration-200 group-data-open/collapsible:rotate-90" />
                    </FrameHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <FramePanel>
                      <ol className="list-decimal ml-4 text-muted-foreground text-sm leading-relaxed space-y-1">
                        {step.description.map((item, index) => (
                          <li key={index} className="ps-1">
                            {item}
                          </li>
                        ))}
                      </ol>
                    </FramePanel>
                  </CollapsibleContent>
                </Collapsible>
              </Frame>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
