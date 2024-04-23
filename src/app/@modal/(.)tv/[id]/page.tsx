import {ErrorBoundary} from "next/dist/client/components/error-boundary";
import {Suspense} from "react";

import {Error} from "@/components/error";
import {Modal} from "@/components/ui/modal";
import {TvDetailModal} from "@/components/details/tv-details-modal";

export default function ModalTvDetailsPage({params: {id}}: {params: {id: number}}) {
  return (
    <Modal>
      <ErrorBoundary errorComponent={Error}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <TvDetailModal id={id} />
        </Suspense>
      </ErrorBoundary>
    </Modal>
  );
}
