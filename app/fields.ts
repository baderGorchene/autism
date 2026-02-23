export const FIELDS = [
    {
        "id": "q_2_age_of_the_girl",
        "question": "Age of the girl",
        "type": "number",
        "min": 1,
        "max": 15,
        "col": 2,
        "hint": "Numeric between 1 and 15 both inclusive"
    },
    {
        "id": "q_3_is_there_a_family_history_of_autism_or_related_neurodevelopmental_conditions",
        "question": "Is there a family history of autism or related neurodevelopmental conditions?",
        "type": "select",
        "col": 3,
        "hint": "0–No, 1–Not Sure, 2–Yes",
        "options": [
            { "value": "0", "label": "0 — No" },
            { "value": "1", "label": "1 — Not Sure" },
            { "value": "2", "label": "2 — Yes" }
        ]
    },
    {
        "id": "q_4_did_you_experience_any_complications_during_pregnancy_or_childbirth",
        "question": "Did you experience any complications during pregnancy or childbirth?",
        "type": "select",
        "col": 4,
        "hint": "0–No complications, 1–Any complications reported",
        "options": [
            { "value": "0", "label": "0 — No complications" },
            { "value": "1", "label": "1 — Any complications reported" }
        ]
    },
    {
        "id": "q_5_at_what_age_did_your_child_first_start_to_walk",
        "question": "At what age did your child first start to walk?",
        "type": "number",
        "min": 1,
        "max": 5,
        "col": 5,
        "hint": "Numeric between 1 and 5 both inclusive"
    },
    {
        "id": "q_6_at_what_age_did_your_child_first_start_to_speak_in_full_words_or_phrases",
        "question": "At what age did your child first start to speak in full words or phrases?",
        "type": "number",
        "min": 1,
        "max": 5,
        "col": 6,
        "hint": "Numeric between 1 and 5 both inclusive"
    },
    {
        "id": "q_7_are_there_any_known_medical_neurological_or_psychological_conditions_your_child_is_currently_experiencing",
        "question": "Are there any known medical, neurological, or psychological conditions your child is currently experiencing?",
        "type": "select",
        "col": 7,
        "hint": "0–None, 1–One or more conditions",
        "options": [
            { "value": "0", "label": "0 — None" },
            { "value": "1", "label": "1 — One or more conditions" }
        ]
    },
    {
        "id": "q_8_appears_comfortable_in_social_settings_e_g_classrooms_birthday_parties",
        "question": "Appears comfortable in social settings (e.g., classrooms, birthday parties)",
        "type": "select",
        "col": 8,
        "hint": "1–Never, 2–Rarely, 3–Sometimes, 4–Often, 5–Always",
        "options": [
            { "value": "1", "label": "1 — Never" },
            { "value": "2", "label": "2 — Rarely" },
            { "value": "3", "label": "3 — Sometimes" },
            { "value": "4", "label": "4 — Often" },
            { "value": "5", "label": "5 — Always" }
        ]
    },
    {
        "id": "q_9_prefers_spending_time_with_close_friend_s_over_group_of_people_with_group_activities",
        "question": "Prefers spending time with close friend(s) over group of people with group activities",
        "type": "select",
        "col": 9,
        "hint": "1–Never, 2–Rarely, 3–Sometimes, 4–Often, 5–Always",
        "options": [
            { "value": "1", "label": "1 — Never" },
            { "value": "2", "label": "2 — Rarely" },
            { "value": "3", "label": "3 — Sometimes" },
            { "value": "4", "label": "4 — Often" },
            { "value": "5", "label": "5 — Always" }
        ]
    },
    {
        "id": "q_10_seems_emotionally_or_physically_exhausted_after_socializing",
        "question": "Seems emotionally or physically exhausted after socializing",
        "type": "select",
        "col": 10,
        "hint": "1–Never, 2–Rarely, 3–Sometimes, 4–Often, 5–Always",
        "options": [
            { "value": "1", "label": "1 — Never" },
            { "value": "2", "label": "2 — Rarely" },
            { "value": "3", "label": "3 — Sometimes" },
            { "value": "4", "label": "4 — Often" },
            { "value": "5", "label": "5 — Always" }
        ]
    },
    {
        "id": "q_11_confidently_initiates_conversations",
        "question": "Confidently initiates conversations",
        "type": "select",
        "col": 11,
        "hint": "1–Never, 2–Rarely, 3–Sometimes, 4–Often, 5–Always",
        "options": [
            { "value": "1", "label": "1 — Never" },
            { "value": "2", "label": "2 — Rarely" },
            { "value": "3", "label": "3 — Sometimes" },
            { "value": "4", "label": "4 — Often" },
            { "value": "5", "label": "5 — Always" }
        ]
    },
    {
        "id": "q_12_struggles_to_read_facial_expressions_tone_or_body_language",
        "question": "Struggles to read facial expressions, tone, or body language",
        "type": "select",
        "col": 12,
        "hint": "1–Never, 2–Rarely, 3–Sometimes, 4–Often, 5–Always",
        "options": [
            { "value": "1", "label": "1 — Never" },
            { "value": "2", "label": "2 — Rarely" },
            { "value": "3", "label": "3 — Sometimes" },
            { "value": "4", "label": "4 — Often" },
            { "value": "5", "label": "5 — Always" }
        ]
    },
    {
        "id": "q_13_recognizes_familiar_people_when_seeing_them_unexpectedly",
        "question": "Recognizes familiar people when seeing them unexpectedly",
        "type": "select",
        "col": 13,
        "hint": "1–Never, 2–Rarely, 3–Sometimes, 4–Often, 5–Always",
        "options": [
            { "value": "1", "label": "1 — Never" },
            { "value": "2", "label": "2 — Rarely" },
            { "value": "3", "label": "3 — Sometimes" },
            { "value": "4", "label": "4 — Often" },
            { "value": "5", "label": "5 — Always" }
        ]
    },
    {
        "id": "q_14_is_able_to_put_up_with_go_along_with_inaccuracies_guestimations_approximation",
        "question": "Is able to put up with / go along with inaccuracies / guestimations / approximation?",
        "type": "select",
        "col": 14,
        "hint": "1–Never, 2–Rarely, 3–Sometimes, 4–Often, 5–Always",
        "options": [
            { "value": "1", "label": "1 — Never" },
            { "value": "2", "label": "2 — Rarely" },
            { "value": "3", "label": "3 — Sometimes" },
            { "value": "4", "label": "4 — Often" },
            { "value": "5", "label": "5 — Always" }
        ]
    },
    {
        "id": "q_15_frequently_feels_misunderstood_during_conversations",
        "question": "Frequently feels misunderstood during conversations",
        "type": "select",
        "col": 15,
        "hint": "1–Never, 2–Rarely, 3–Sometimes, 4–Often, 5–Always",
        "options": [
            { "value": "1", "label": "1 — Never" },
            { "value": "2", "label": "2 — Rarely" },
            { "value": "3", "label": "3 — Sometimes" },
            { "value": "4", "label": "4 — Often" },
            { "value": "5", "label": "5 — Always" }
        ]
    },
    {
        "id": "q_16_becomes_upset_or_frustrated_when_misunderstood",
        "question": "Becomes upset or frustrated when misunderstood",
        "type": "select",
        "col": 16,
        "hint": "1–Never, 2–Rarely, 3–Sometimes, 4–Often, 5–Always",
        "options": [
            { "value": "1", "label": "1 — Never" },
            { "value": "2", "label": "2 — Rarely" },
            { "value": "3", "label": "3 — Sometimes" },
            { "value": "4", "label": "4 — Often" },
            { "value": "5", "label": "5 — Always" }
        ]
    },
    {
        "id": "q_17_struggles_to_express_emotions_with_words",
        "question": "Struggles to express emotions with words",
        "type": "select",
        "col": 17,
        "hint": "1–Never, 2–Rarely, 3–Sometimes, 4–Often, 5–Always",
        "options": [
            { "value": "1", "label": "1 — Never" },
            { "value": "2", "label": "2 — Rarely" },
            { "value": "3", "label": "3 — Sometimes" },
            { "value": "4", "label": "4 — Often" },
            { "value": "5", "label": "5 — Always" }
        ]
    },
    {
        "id": "q_18_finds_it_difficult_to_calm_down_after_becoming_upset_or_stressed",
        "question": "Finds it difficult to calm down after becoming upset or stressed",
        "type": "select",
        "col": 18,
        "hint": "1–Never, 2–Rarely, 3–Sometimes, 4–Often, 5–Always",
        "options": [
            { "value": "1", "label": "1 — Never" },
            { "value": "2", "label": "2 — Rarely" },
            { "value": "3", "label": "3 — Sometimes" },
            { "value": "4", "label": "4 — Often" },
            { "value": "5", "label": "5 — Always" }
        ]
    },
    {
        "id": "q_19_demonstrates_ritualized_patterns_of_verbal_or_nonverbal_behavior_with_extreme_distress_at_small_changes_prefers_routines_in_daily_life",
        "question": "Demonstrates ritualized patterns of verbal or nonverbal behavior with extreme distress at small changes (Prefers routines in daily life)",
        "type": "select",
        "col": 19,
        "hint": "1–Never, 2–Rarely, 3–Sometimes, 4–Often, 5–Always",
        "options": [
            { "value": "1", "label": "1 — Never" },
            { "value": "2", "label": "2 — Rarely" },
            { "value": "3", "label": "3 — Sometimes" },
            { "value": "4", "label": "4 — Often" },
            { "value": "5", "label": "5 — Always" }
        ]
    },
    {
        "id": "q_20_rehearses_or_plans_their_conversations_phrases_always_greet_good_morning_evening_etc_in_advance",
        "question": "Rehearses or plans their conversations (phrases, always greet Good Morning/Evening, etc.) in advance",
        "type": "select",
        "col": 20,
        "hint": "1–Never, 2–Rarely, 3–Sometimes, 4–Often, 5–Always",
        "options": [
            { "value": "1", "label": "1 — Never" },
            { "value": "2", "label": "2 — Rarely" },
            { "value": "3", "label": "3 — Sometimes" },
            { "value": "4", "label": "4 — Often" },
            { "value": "5", "label": "5 — Always" }
        ]
    },
    {
        "id": "q_21_monitors_others_reactions_to_her_actions_to_get_a_validation_that_she_is_acting_appropriately",
        "question": "Monitors others’ reactions to her actions to get a validation that she is acting appropriately",
        "type": "select",
        "col": 21,
        "hint": "1–Never, 2–Rarely, 3–Sometimes, 4–Often, 5–Always",
        "options": [
            { "value": "1", "label": "1 — Never" },
            { "value": "2", "label": "2 — Rarely" },
            { "value": "3", "label": "3 — Sometimes" },
            { "value": "4", "label": "4 — Often" },
            { "value": "5", "label": "5 — Always" }
        ]
    },
    {
        "id": "q_22_engages_in_stimming_i_e_certain_repetitive_movements_or_actions_twirling_rocking_waving_hands_wiggling_legs_humming_etc",
        "question": "Engages in “stimming” i.e. certain repetitive movements or actions: Twirling, rocking, waving hands, wiggling legs, humming, etc.",
        "type": "select",
        "col": 22,
        "hint": "1–Never, 2–Rarely, 3–Sometimes, 4–Often, 5–Always",
        "options": [
            { "value": "1", "label": "1 — Never" },
            { "value": "2", "label": "2 — Rarely" },
            { "value": "3", "label": "3 — Sometimes" },
            { "value": "4", "label": "4 — Often" },
            { "value": "5", "label": "5 — Always" }
        ]
    },
    {
        "id": "q_23_appears_confused_by_social_expectations_or_unwritten_rules",
        "question": "Appears confused by social expectations or 'unwritten rules'",
        "type": "select",
        "col": 23,
        "hint": "1–Never, 2–Rarely, 3–Sometimes, 4–Often, 5–Always",
        "options": [
            { "value": "1", "label": "1 — Never" },
            { "value": "2", "label": "2 — Rarely" },
            { "value": "3", "label": "3 — Sometimes" },
            { "value": "4", "label": "4 — Often" },
            { "value": "5", "label": "5 — Always" }
        ]
    },
    {
        "id": "q_24_mimics_others_behavior_to_fit_in",
        "question": "Mimics others’ behavior to fit in",
        "type": "select",
        "col": 24,
        "hint": "1–Never, 2–Rarely, 3–Sometimes, 4–Often, 5–Always",
        "options": [
            { "value": "1", "label": "1 — Never" },
            { "value": "2", "label": "2 — Rarely" },
            { "value": "3", "label": "3 — Sometimes" },
            { "value": "4", "label": "4 — Often" },
            { "value": "5", "label": "5 — Always" }
        ]
    },
    {
        "id": "q_25_avoids_or_struggles_to_maintain_eye_contact",
        "question": "Avoids or struggles to maintain eye contact",
        "type": "select",
        "col": 25,
        "hint": "1–Never, 2–Rarely, 3–Sometimes, 4–Often, 5–Always",
        "options": [
            { "value": "1", "label": "1 — Never" },
            { "value": "2", "label": "2 — Rarely" },
            { "value": "3", "label": "3 — Sometimes" },
            { "value": "4", "label": "4 — Often" },
            { "value": "5", "label": "5 — Always" }
        ]
    },
    {
        "id": "q_26_fnds_it_difficult_to_follow_multiple_conversations_happening_at_once_e_g_in_a_group_setting",
        "question": "Fnds it difficult to follow multiple conversations happening at once (e.g., in a group setting)?",
        "type": "select",
        "col": 26,
        "hint": "1–Never, 2–Rarely, 3–Sometimes, 4–Often, 5–Always",
        "options": [
            { "value": "1", "label": "1 — Never" },
            { "value": "2", "label": "2 — Rarely" },
            { "value": "3", "label": "3 — Sometimes" },
            { "value": "4", "label": "4 — Often" },
            { "value": "5", "label": "5 — Always" }
        ]
    },
    {
        "id": "q_27_feels_overwhelmed_by_the_need_to_communicate_in_social_situations",
        "question": "Feels overwhelmed by the need to communicate in social situations?",
        "type": "select",
        "col": 27,
        "hint": "1–Never, 2–Rarely, 3–Sometimes, 4–Often, 5–Always",
        "options": [
            { "value": "1", "label": "1 — Never" },
            { "value": "2", "label": "2 — Rarely" },
            { "value": "3", "label": "3 — Sometimes" },
            { "value": "4", "label": "4 — Often" },
            { "value": "5", "label": "5 — Always" }
        ]
    },
    {
        "id": "q_28_feels_overwhelmed_stressed_when_something_changes_on_them_at_the_last_minute_or_gets_upset_when_others_do_not_follow_through_on_plans_promises_made",
        "question": "Feels overwhelmed / stressed when something changes on them at the last minute or gets upset when others do not follow through on plans/promises made",
        "type": "select",
        "col": 28,
        "hint": "1–Never, 2–Rarely, 3–Sometimes, 4–Often, 5–Always",
        "options": [
            { "value": "1", "label": "1 — Never" },
            { "value": "2", "label": "2 — Rarely" },
            { "value": "3", "label": "3 — Sometimes" },
            { "value": "4", "label": "4 — Often" },
            { "value": "5", "label": "5 — Always" }
        ]
    },
    {
        "id": "q_29_appears_anxious_or_withdrawn_in_unfamiliar_social_settings",
        "question": "Appears anxious or withdrawn in unfamiliar social settings",
        "type": "select",
        "col": 29,
        "hint": "1–Never, 2–Rarely, 3–Sometimes, 4–Often, 5–Always",
        "options": [
            { "value": "1", "label": "1 — Never" },
            { "value": "2", "label": "2 — Rarely" },
            { "value": "3", "label": "3 — Sometimes" },
            { "value": "4", "label": "4 — Often" },
            { "value": "5", "label": "5 — Always" }
        ]
    },
    {
        "id": "q_30_finds_it_difficult_to_manage_emotions_during_stressful_interactions",
        "question": "Finds it difficult to manage emotions during stressful interactions",
        "type": "select",
        "col": 30,
        "hint": "1–Never, 2–Rarely, 3–Sometimes, 4–Often, 5–Always",
        "options": [
            { "value": "1", "label": "1 — Never" },
            { "value": "2", "label": "2 — Rarely" },
            { "value": "3", "label": "3 — Sometimes" },
            { "value": "4", "label": "4 — Often" },
            { "value": "5", "label": "5 — Always" }
        ]
    },
    {
        "id": "q_31_internalizes_anxiety_or_stress_without_showing_it",
        "question": "Internalizes anxiety or stress without showing it",
        "type": "select",
        "col": 31,
        "hint": "1–Never, 2–Rarely, 3–Sometimes, 4–Often, 5–Always",
        "options": [
            { "value": "1", "label": "1 — Never" },
            { "value": "2", "label": "2 — Rarely" },
            { "value": "3", "label": "3 — Sometimes" },
            { "value": "4", "label": "4 — Often" },
            { "value": "5", "label": "5 — Always" }
        ]
    },
    {
        "id": "q_32_struggles_to_follow_conversations_in_group_settings",
        "question": "Struggles to follow conversations in group settings",
        "type": "select",
        "col": 32,
        "hint": "1–Never, 2–Rarely, 3–Sometimes, 4–Often, 5–Always",
        "options": [
            { "value": "1", "label": "1 — Never" },
            { "value": "2", "label": "2 — Rarely" },
            { "value": "3", "label": "3 — Sometimes" },
            { "value": "4", "label": "4 — Often" },
            { "value": "5", "label": "5 — Always" }
        ]
    },
    {
        "id": "q_33_sensitive_to_loud_noises_and_or_bright_lights_or_visual_clutter",
        "question": "Sensitive to loud noises and/or bright lights or visual clutter",
        "type": "select",
        "col": 33,
        "hint": "1–Never, 2–Rarely, 3–Sometimes, 4–Often, 5–Always",
        "options": [
            { "value": "1", "label": "1 — Never" },
            { "value": "2", "label": "2 — Rarely" },
            { "value": "3", "label": "3 — Sometimes" },
            { "value": "4", "label": "4 — Often" },
            { "value": "5", "label": "5 — Always" }
        ]
    },
    {
        "id": "q_34_avoids_certain_fabrics_or_textures_due_to_discomfort",
        "question": "Avoids certain fabrics or textures due to discomfort",
        "type": "select",
        "col": 34,
        "hint": "1–Never, 2–Rarely, 3–Sometimes, 4–Often, 5–Always",
        "options": [
            { "value": "1", "label": "1 — Never" },
            { "value": "2", "label": "2 — Rarely" },
            { "value": "3", "label": "3 — Sometimes" },
            { "value": "4", "label": "4 — Often" },
            { "value": "5", "label": "5 — Always" }
        ]
    },
    {
        "id": "q_35_affected_by_strong_smells_that_others_seem_to_tolerate",
        "question": "Affected by strong smells that others seem to tolerate",
        "type": "select",
        "col": 35,
        "hint": "1–Never, 2–Rarely, 3–Sometimes, 4–Often, 5–Always",
        "options": [
            { "value": "1", "label": "1 — Never" },
            { "value": "2", "label": "2 — Rarely" },
            { "value": "3", "label": "3 — Sometimes" },
            { "value": "4", "label": "4 — Often" },
            { "value": "5", "label": "5 — Always" }
        ]
    },
    {
        "id": "q_36_appears_overwhelmed_in_crowded_or_noisy_environments",
        "question": "Appears overwhelmed in crowded or noisy environments",
        "type": "select",
        "col": 36,
        "hint": "1–Never, 2–Rarely, 3–Sometimes, 4–Often, 5–Always",
        "options": [
            { "value": "1", "label": "1 — Never" },
            { "value": "2", "label": "2 — Rarely" },
            { "value": "3", "label": "3 — Sometimes" },
            { "value": "4", "label": "4 — Often" },
            { "value": "5", "label": "5 — Always" }
        ]
    },
    {
        "id": "q_37_uses_the_same_phrases_or_greetings_in_different_situations",
        "question": "Uses the same phrases or greetings in different situations",
        "type": "select",
        "col": 37,
        "hint": "1–Never, 2–Rarely, 3–Sometimes, 4–Often, 5–Always",
        "options": [
            { "value": "1", "label": "1 — Never" },
            { "value": "2", "label": "2 — Rarely" },
            { "value": "3", "label": "3 — Sometimes" },
            { "value": "4", "label": "4 — Often" },
            { "value": "5", "label": "5 — Always" }
        ]
    },
    {
        "id": "q_38_demonstrates_strong_emotional_reactions_in_intense_situations_e_g_anger_crying_withdrawal",
        "question": "Demonstrates strong emotional reactions in intense situations (e.g., anger, crying, withdrawal)",
        "type": "select",
        "col": 38,
        "hint": "1–Never, 2–Rarely, 3–Sometimes, 4–Often, 5–Always",
        "options": [
            { "value": "1", "label": "1 — Never" },
            { "value": "2", "label": "2 — Rarely" },
            { "value": "3", "label": "3 — Sometimes" },
            { "value": "4", "label": "4 — Often" },
            { "value": "5", "label": "5 — Always" }
        ]
    }
];
