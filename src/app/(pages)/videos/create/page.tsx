'use client'

import { useState } from "react";
import { SubmitHandler, useForm, useFieldArray } from "react-hook-form";

import VideosAPI from "@/shared/api/videos-api";

import styles from "./styles.module.scss";
import { IFragments } from "@/entities/video-card/models/video-card.inteface";


type FormValues = {
  title: string;
  duration: number;
  views: number;
  channel_id: string;
  channel_name: string;
  channel_avatarUrl?: string;
  videoFile: FileList;
  thumbnailFile: FileList;
  fragments: IFragments[];
};

export default function CreateVideo() {
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      title: "",
      duration: 0,
      views: 0,
      channel_id: "",
      channel_name: "",
      channel_avatarUrl: "",
      fragments: [],
    },
  });

  const videoFile = watch("videoFile");
  const thumbnailFile = watch("thumbnailFile");

  // Предпросмотр видео
  useState(() => {
    if (videoFile && videoFile.length > 0) {
      const file = videoFile[0];
      const url = URL.createObjectURL(file);
      setVideoPreview(url);
      return () => URL.revokeObjectURL(url);
    }
  });

  // Предпросмотр thumbnail
  useState(() => {
    if (thumbnailFile && thumbnailFile.length > 0) {
      const file = thumbnailFile[0];
      const url = URL.createObjectURL(file);
      setThumbnailPreview(url);
      return () => URL.revokeObjectURL(url);
    }
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const formData = new FormData();

    // обычные поля
    formData.append("title", data.title);
    formData.append("duration", data.duration.toString());
    formData.append("views", data.views.toString());

    formData.append("channel_id", data.channel_id);
    formData.append("channel_name", data.channel_name);
    if (data.channel_avatarUrl) {
        formData.append("channel_avatarUrl", data.channel_avatarUrl);
    }

    // файлы
    if (data.videoFile && data.videoFile.length > 0) {
        formData.append("video", data.videoFile[0]);
    }
    if (data.thumbnailFile && data.thumbnailFile.length > 0) {
        formData.append("thumbnail", data.thumbnailFile[0]);
    }

    // фрагменты как JSON‑строку
    const fragments: IFragments[] =
        data.fragments.map((f) => ({
        start: Number(f.start) || 0,
        end: Number(f.end) || 0,
        title: f.title,
        })) || [];
    formData.append("fragments", JSON.stringify(fragments));

    await VideosAPI.createVideo(formData)
  };


  const { fields, append, remove } = useFieldArray({
    control,
    name: "fragments",
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Добавить видео</h1>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {/* Название */}
        <div className={styles.field}>
          <label className={styles.label}>Название</label>
          <input
            type="text"
            {...register("title", { required: "Обязательное поле" })}
            className={styles.input}
          />
          {errors.title && <span className={styles.error}>{errors.title.message}</span>}
        </div>

        {/* Длительность */}
        <div className={styles.field}>
          <label className={styles.label}>Длительность (сек)</label>
          <input
            type="number"
            {...register("duration", {
              required: "Обязательное поле",
              valueAsNumber: true,
            })}
            className={styles.input}
          />
          {errors.duration && (
            <span className={styles.error}>{errors.duration.message}</span>
          )}
        </div>

        {/* Просмотры */}
        <div className={styles.field}>
          <label className={styles.label}>Просмотры</label>
          <input
            type="number"
            {...register("views", { valueAsNumber: true })}
            className={styles.input}
          />
        </div>

        {/* Канал */}
        <div className={styles.section}>
          <h2 className={styles.subtitle}>Канал</h2>

          <div className={styles.field}>
            <label className={styles.label}>ID канала</label>
            <input
              type="text"
              {...register("channel_id")}
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Название канала</label>
            <input
              type="text"
              {...register("channel_name")}
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Avatar URL</label>
            <input
              type="text"
              {...register("channel_avatarUrl")}
              className={styles.input}
            />
          </div>
        </div>

        {/* Видео файл */}
        <div className={styles.field}>
          <label className={styles.label}>Видео файл</label>
          <input
            type="file"
            accept="video/*"
            {...register("videoFile", { required: "Обязательное поле" })}
            className={styles.input}
          />
          {errors.videoFile && (
            <span className={styles.error}>{errors.videoFile.message}</span>
          )}

          {videoPreview && (
            <video
              src={videoPreview}
              controls
              className={styles.videoPreview}
            />
          )}
        </div>

        {/* Thumbnail файл */}
        <div className={styles.field}>
          <label className={styles.label}>Thumbnail (изображение)</label>
          <input
            type="file"
            accept="image/*"
            {...register("thumbnailFile", { required: "Обязательное поле" })}
            className={styles.input}
          />
          {errors.thumbnailFile && (
            <span className={styles.error}>{errors.thumbnailFile.message}</span>
          )}

          {thumbnailPreview && (
            <img
              src={thumbnailPreview}
              alt="Thumbnail preview"
              className={styles.thumbnailPreview}
            />
          )}
        </div>

        {/* Фрагменты */}
        <div className={styles.section}>
          <h2 className={styles.subtitle}>Фрагменты</h2>

          {fields.map((field, index) => (
            <div key={field.id} className={styles.fragmentRow}>
              <div className={styles.field}>
                <label className={styles.label}>Start (сек)</label>
                <input
                  type="number"
                  {...register(`fragments.${index}.start` as const)}
                  className={styles.input}
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>End (сек)</label>
                <input
                  type="number"
                  {...register(`fragments.${index}.end` as const)}
                  className={styles.input}
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Заголовок</label>
                <input
                  type="text"
                  {...register(`fragments.${index}.title` as const)}
                  className={styles.input}
                />
              </div>

              <button
                type="button"
                onClick={() => remove(index)}
                className={styles.removeBtn}
              >
                Удалить
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={() => append({ start: 0, end: 0, title: "" })}
            className={styles.addBtn}
          >
            + Добавить фрагмент
          </button>
        </div>

        <button type="submit" className={styles.submitBtn}>
          Создать видео
        </button>
      </form>
    </div>
  );
}