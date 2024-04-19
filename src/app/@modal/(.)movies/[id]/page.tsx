import {ErrorBoundary} from "next/dist/client/components/error-boundary";
import {Suspense} from "react";

import {Error} from "@/components/error";
import {Modal} from "@/components/ui/modal";
import {MovieDetailModal} from "@/components/details/movie-details-modal";

export default function ModalMovieDetailsPage({params: {id}}: {params: {id: number}}) {
  return (
    <Modal className="items-start">
      <ErrorBoundary errorComponent={Error}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <MovieDetailModal id={id} />
        </Suspense>
      </ErrorBoundary>
    </Modal>
  );
}
