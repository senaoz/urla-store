"use client";

import Markdown from "react-markdown";
import React from "react";

interface MarkdownContentProps {
  children: string;
}

export function MarkdownContent({ children }: MarkdownContentProps) {
  return <Markdown>{children}</Markdown>;
}
