import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getByMeetingId = query({
  args: { meetingId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("meetingCode")
      .withIndex("by_meeting_id", (q) => q.eq("meetingId", args.meetingId))
      .first();
  },
});

export const upsertMeetingCode = mutation({
  args: {
    meetingId: v.string(),
    questionId: v.string(),
    language: v.string(),
    code: v.string(),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("meetingCode")
      .withIndex("by_meeting_id", (q) => q.eq("meetingId", args.meetingId))
      .first();

    if (existing) {
      return await ctx.db.patch(existing._id, {
        questionId: args.questionId,
        language: args.language,
        code: args.code,
      });
    }

    return await ctx.db.insert("meetingCode", {
      meetingId: args.meetingId,
      questionId: args.questionId,
      language: args.language,
      code: args.code,
    });
  },
});
